"use client";

import React, { MouseEventHandler, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    DragControls,
    Environment,
    MeshTransmissionMaterial,
    OrbitControls,
    OrthographicCamera,
    PerspectiveCamera,
} from "@react-three/drei";

import { useGLTF } from "@react-three/drei";
import { ReceiptText } from "lucide-react";
import { useInView } from "framer-motion";

useGLTF.preload("/star.glb");

function Model({ mouse }) {
    const ref = useRef(null);
    const { nodes, materials } = useGLTF("/star.glb");
    console.log(materials);
    const { viewport } = useThree();

    const bobbingRef = useRef({ y: 0 });

    useFrame((state) => {
        if (ref.current) {
            // Rotate based on mouse position
            ref.current.rotation.x = -mouse.current[1] + -0.5; // Tilt up slightly
            ref.current.rotation.y = mouse.current[0] + -0.5; // Tilt to the right slightly

            // Bobbing animation
            const t = state.clock.getElapsedTime();
            bobbingRef.current.y = Math.sin(t * 2) * 0.05; // Adjust frequency and amplitude here
            ref.current.position.y = bobbingRef.current.y;
        }
    });

    return (
        <group ref={ref} scale={viewport.width / 3}>
            <mesh receiveShadow castShadow geometry={nodes.outer.geometry}>
                <MeshTransmissionMaterial />
            </mesh>
            <mesh
                // ref={ref}
                receiveShadow
                castShadow
                geometry={nodes.inner.geometry}
                material={materials[""]}
            ></mesh>
        </group>
    );
}

const StarScene: React.FC = () => {
    const mouse = useRef([0, 0]);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    // useEffect(() => {
    //     const handleMouseMove = (event: MouseEvent) => {
    //         mouse.current = [
    //             (event.clientX / window.innerWidth) * 2 - 1,
    //             -(event.clientY / window.innerHeight) * 2 + 1,
    //         ];
    //     };

    //     window.addEventListener("mousemove", handleMouseMove);

    //     return () => {
    //         window.removeEventListener("mousemove", handleMouseMove);
    //     };
    // }, []);

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
                        intensity={5}
                        position={[2, 0, 5]}
                        color={"#e2bbd0"}
                    />
                    {/* <ambientLight intensity={1} color={"0xffffff"}/> */}
                    <Model mouse={mouse} />
                </Canvas>
            )}
        </div>
    );
};

export default StarScene;
