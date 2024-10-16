import { Enriqueta } from 'next/font/google';
import React from 'react'

const enriqueta = Enriqueta({
  subsets: ["latin"],
  weight: "700",
});

export const Header = ({title, info}) => {
  return (
    <header>
      <h1 className={`text-4xl text-white max-w-[16rem] ${enriqueta?.className}`}>{title}</h1>
      <div className="text-neutral-400 mt-4 space-y-4">
        <p>{info}</p>
      </div>
    </header>
  )
}
