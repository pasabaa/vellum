"use client";
import { halloweenCostumePrompts } from "@/data/costumes";
import React from "react";
import { NextStep } from "./NextStep";

export const CostumeSelect = () => {
  const [currentOption, setCurrentOption] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(null);

  const handleCurrentOption = (option, index) => {
    setCurrentOption(option);
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="mt-4 mb-8 grid grid-cols-4 gap-2.5 h-96 overflow-y-scroll snap-mandatory snap-y">
        {halloweenCostumePrompts?.map((costume, i) => (
          <button
            className={`transition-colors p-2 bg-neutral-900 hover:bg-white hover:text-black h-24 text-sm snap-start ${
              currentIndex === i && 'bg-white text-black font-medium'
            }`}
            onClick={() => handleCurrentOption(costume, i)}
            key={i}
            value={costume?.value}
          >
            {costume?.text}
          </button>
        ))}
      </div>
      {
        currentOption && (

          <NextStep name={"Resultado"} url={`/result/${encodeURIComponent(currentOption?.value)}`} />
        )
      }
    </>
  );
};
