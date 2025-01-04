"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const phrases = ["Welcome!", "I'm Guru Updesh", "I can do"];
const durations = [1750, 3750, 7000];

function IntroRotate() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const showNextPhrase = () => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };

    const timeout = setTimeout(showNextPhrase, durations[index]);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="mb-2 text-xl transition-[margin] lg:text-2xl">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={phrases[index]}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ 
              duration: 0.75, 
              ease: [0.6, 0.6, 0, 1]
            }}
          >
            {phrases[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default IntroRotate;
