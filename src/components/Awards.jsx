'use client'
import { awards } from "@/data/awards";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { animationAwards } from "@/data/animation";

export const Awards = () => {
  const [completedCostumes, setCompletedCostumes] = useState(0);

  useEffect(() => {
    const storedCostumes = localStorage.getItem('completedCostumes');
    if (storedCostumes) {
      setCompletedCostumes(Number(storedCostumes));
    }
  }, []);

  return (
    <motion.div {...animationAwards} className="absolute inset-0 mt-12 p-4 bg-zinc-950/95 backdrop-blur-sm min-h-min ml-auto">
      <div className="grid grid-cols-1 gap-4">
        {awards?.map((award, index) => {
          // Cambiar isUnlocked según el número de disfraces creados
          const isUnlocked = completedCostumes >= award.umbral;

          return (
            <div 
              key={index} 
              className={`flex gap-2 items-center ${isUnlocked ? "opacity-100" : "opacity-50"}`}
            >
              <span className="p-4 rounded-full bg-neutral-900">
                {award.icon}
              </span>
              <div>
                <p>{award.title}</p>
                <p className="text-sm text-neutral-400">{award.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};