"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useInView } from "framer-motion";
import { Group, Vector2 } from "three";

useGLTF.preload("/star.glb");

type ModelProps = {
    mousePosition: Vector2;
    isMouseInWindow: boolean;
};

function Model({ mousePosition, isMouseInWindow }: ModelProps) {
    const ref = useRef<Group>(null);
    const { nodes, materials } = useGLTF("/star.glb");
    const { viewport } = useThree();
    const bobbingRef = useRef({ y: 0 });
    const targetRotation = useRef(new Vector2(0, 0));
    const currentRotation = useRef(new Vector2(0, 0));

    useFrame((state, delta) => {
        if (ref.current) {
            if (isMouseInWindow) {
                targetRotation.current.set(
                    -mousePosition.y + -0.5,
                    mousePosition.x + -0.5,
                );
            } else {
                targetRotation.current.set(0, 0);
            }

            // Smoothly interpolate towards the target rotation
            currentRotation.current.lerp(targetRotation.current, 0.1);

            ref.current.rotation.x = currentRotation.current.x;
            ref.current.rotation.y = currentRotation.current.y;

            // Bobbing animation
            const t = state.clock.getElapsedTime();
            bobbingRef.current.y = Math.sin(t * 2) * 0.05;
            ref.current.position.y = bobbingRef.current.y;
        }
    });

    return (
        <group ref={ref} scale={viewport.width / 3}>
            <mesh
                receiveShadow
                castShadow
                geometry={nodes.inner.geometry}
                material={materials[""]}
            ></mesh>
        </group>
    );
}

const StarScene: React.FC = () => {
    const [mousePosition, setMousePosition] = useState(new Vector2(0, 0));
    const [isMouseInWindow, setIsMouseInWindow] = useState(true);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setIsMouseInWindow(true);
            setMousePosition(
                new Vector2(
                    (event.clientX / window.innerWidth) * 2 - 1,
                    -(event.clientY / window.innerHeight) * 2 + 1,
                ),
            );
        };

        const handleMouseLeave = () => {
            setIsMouseInWindow(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={ref} className="h-[150px] w-[150px]">
            {inView && (
                <Canvas>
                    <PerspectiveCamera
                        makeDefault
                        fov={35}
                        position={[0, 0, 5]}
                    />
                    <directionalLight
                        intensity={5}
                        position={[-2, 10, 0]}
                        color={"#be2268"}
                    />
                    <directionalLight
                        intensity={4}
                        position={[-8, -2, -2]}
                        color={"#bc92d9"}
                    />
                    <directionalLight
                        intensity={4}
                        position={[-16, 10, -2]}
                        color={"#7db498"}
                    />
                    <Model
                        mousePosition={mousePosition}
                        isMouseInWindow={isMouseInWindow}
                    />
                </Canvas>
            )}
        </div>
    );
};

export default StarScene;
