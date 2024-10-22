'use client'
import { awards } from "@/data/awards";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { animationAwards } from "@/data/animation";
import toast from 'react-hot-toast';

const notify = (text, iconAward) => toast(text, {
    duration: 4000,
    position: 'bottom-center',
    style: {
        padding: '8px',
        color: 'black',
        backgroundColor: 'white',
        fontSize: '14px',
        borderRadius: '0px',
        width: '100%'
      },
    icon: iconAward
});

export const Awards = () => {
  const [completedCostumes, setCompletedCostumes] = useState(0);
  const [notifiedAwards, setNotifiedAwards] = useState(new Set());

  useEffect(() => {
    const storedCostumes = localStorage.getItem('completedCostumes');
    if (storedCostumes) {
      setCompletedCostumes(Number(storedCostumes));
    }

    const storedNotifiedAwards = localStorage.getItem('notifiedAwards');
    if (storedNotifiedAwards) {
      setNotifiedAwards(new Set(JSON.parse(storedNotifiedAwards)));
    }
  }, []);

  useEffect(() => {
    
    awards.forEach(award => {
      const isUnlocked = completedCostumes >= award.umbral;
      if (isUnlocked && !notifiedAwards.has(award.title)) {
        notify(award.title, award.icon);
        setNotifiedAwards(prev => {
          const newSet = new Set(prev).add(award.title);
          
          localStorage.setItem('notifiedAwards', JSON.stringify(Array.from(newSet)));
          return newSet;
        });
      }
    });
  }, [completedCostumes, notifiedAwards]);

  return (
    <motion.div {...animationAwards} className="absolute inset-0 mt-12 p-4 bg-zinc-950/95 backdrop-blur-sm min-h-min ml-auto">
      <div className="grid grid-cols-1 gap-4 max-w-screen-sm mx-auto w-full">
        {awards?.map((award, index) => {

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
                <p className="font-semibold">{award.title}</p>
                <p className="text-sm text-neutral-400">{award.description}</p>
              </div>
            </div>
          );

        })}
      </div>
    </motion.div>
  );
};