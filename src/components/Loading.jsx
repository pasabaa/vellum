'use client'
import { loadingTexts } from "@/data/loadingTexts";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export const Loading = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === loadingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: 'tween' },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 1 } },
  };

  return (
    <motion.span
      className="font-medium"
      key={currentTextIndex}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={textVariants}
    >
      {loadingTexts[currentTextIndex]}
    </motion.span>
  );
};