import { downloadPhoto } from "@/utils";
import { ArrowDownToLine, ArrowUpFromLine, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const LastStep = ({url}) => {

    const filename = `Vellum-${new Date().getTime()}`

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={()=>downloadPhoto(url, filename)}
        className="px-3 py-1.5 bg-white text-black font-medium mt-4 uppercase flex items-center justify-center flex-1 gap-2"
        href={url}
      >
        Descargar <ArrowDownToLine />
      </button>
      <Link
        className="px-3 py-1.5 border border-white font-medium mt-4 uppercase flex items-center justify-center flex-1 gap-2"
        href={'/home'}
      >
        Subir Otra <ArrowUpFromLine />
      </Link>
    </div>
  );
};