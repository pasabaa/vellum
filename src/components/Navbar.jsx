'use client'
import { Volume, Volume1, Volume2, VolumeOff } from "lucide-react";
import { Enriqueta } from "next/font/google";
import Link from "next/link";
import React from "react";

const enriqueta = Enriqueta({
    subsets: ["latin"],
    weight: "700",
  });

export const Navbar = () => {

  const [audioStatus, setAudioStatus] = React.useState(false);
  const audioRef = React.useRef(null);

  const startAudio = () => {
      if (!audioStatus) {
          audioRef.current.play();
          setAudioStatus(true);
      } else {
          audioRef.current.pause();
          setAudioStatus(false);
      }
  }

  const iconsVolume = () => {
      if (audioStatus) {
          return <Volume2 className="stroke-white transition-colors" size={20}/>
      } else {
          return <VolumeOff className="stroke-neutral-500 transition-colors" size={20}/>
      }
  }


  return (
    <nav className="p-4 max-w-screen-sm mx-auto w-full h-16 flex items-center justify-between bg-neutral-950 z-10">
        <audio ref={audioRef} src="https://cdn.freesound.org/previews/759/759855_12771942-lq.mp3" loop></audio>
      <Link href={'/home'} className={`text-xl ${enriqueta.className}`}>Vellum</Link>
      <div className="flex items-center gap-2">
        <button onClick={startAudio}>{iconsVolume()}</button>
      </div>
    </nav>
  );
};
