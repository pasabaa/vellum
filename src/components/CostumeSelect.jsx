"use client";
import { halloweenCostumePrompts } from "@/data/costumes";
import React from "react";
import { NextStep } from "./NextStep";

export const CostumeSelect = () => {
  const [currentOption, setCurrentOption] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [customCostume, setCustomCostume] = React.useState(null);

  const handleCurrentOption = (option, index) => {
    setCurrentOption(option);
    setCurrentIndex(index);
  };

  const handleCustomCostume = (e) => {
    e.preventDefault();
    setCurrentOption(null);
    setCurrentIndex(null);
    const value = e.target.value?.trim();
    if (value === '') return setCustomCostume(null);
    setCustomCostume(value + ' halloween costume');
  };

  return (
    <>
      <div className="mt-4 mb-8 grid grid-cols-4 gap-2.5 h-96 overflow-y-scroll snap-mandatory snap-y">
        {halloweenCostumePrompts?.map((costume, i) => (
          <button
            className={`transition-colors p-2 bg-neutral-900 hover:bg-white hover:text-black h-24 text-sm snap-start ${
              currentIndex === i ? 'bg-white text-black font-medium' : ''
            }`}
            onClick={() => handleCurrentOption(costume, i)}
            key={i}
            value={costume?.value}
          >
            {costume?.text}
          </button>
        ))}
      </div>
      
      {!currentOption && (
        <div>
          <h2 className="font-semibold text-2xl mb-4">Personalizado</h2>
          <input onChange={handleCustomCostume} className="p-2 bg-neutral-900 w-full" placeholder="Programador Java..." type="text" />
        </div>
      )}
      
      {(currentOption || customCostume) && (
        <NextStep
          name={"Resultado"}
          url={`/result/${encodeURIComponent(currentOption?.value || customCostume)}`}
        />
      )}
    </>
  );
};