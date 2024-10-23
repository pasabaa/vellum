'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export const Footer = () => {

  const pathname = usePathname();

  const isResultPage = pathname.startsWith('/result');

  if(!isResultPage) return null;

  return (
    <footer className="p-4 max-w-screen-sm mx-auto w-full mt-auto flex items-end gap-4 text-sm bg-neutral-950 z-10 border-t border-neutral-800">
      <Image
        width={32}
        height={31}
        src="https://res.cloudinary.com/dvuqzso8k/image/upload/v1728670616/hetzz/logo-white_n40fem.png"
        alt="hetzz Logo"
      />
      <div>
      <a href="https://www.pasabaa.com/" target="_blank" rel="noopener noreferrer" className="font-medium underline-offset-4 hover:underline">
        Pablo Sánchez
      </a>
      <div className="flex gap-2 items-center text-xs">
        <span className="font-semibold">Más</span>
        <span>•</span>
        <div className="flex gap-4 *:text-neutral-400">
          <a
            className="link hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mundomitico.com/"
          >
            Mundo Mítico
          </a>
          <a
            className="link hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hetzz.com/"
          >
            hetzz Blog
          </a>
          <a
            className="link hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pasabaa"
          >
            GitHub
          </a>
        </div>
      </div>
      </div>
      
    </footer>
  );
};
