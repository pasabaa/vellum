import { downloadPhoto } from "@/utils";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const LastStep = ({ url, loading, onGenerateStory, onUploadTransformedImage, loadingShare, successShare }) => {
  const filename = `Vellum-${new Date().getTime()}`;

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center gap-4">
        <button
          disabled={loading}
          onClick={() => downloadPhoto(url, filename)}
          className="px-3 py-1.5 bg-white text-black font-medium uppercase flex items-center justify-center flex-1 gap-2 disabled:opacity-50"
          href={url}
        >
          Descargar <ArrowDownToLine />
        </button>
        <Link
          className="px-3 py-1.5 border border-white font-medium uppercase flex items-center justify-center flex-1 gap-2"
          href={"/home"}
        >
          Subir Otra <ArrowUpFromLine />
        </Link>
      </div>
      {/* <button
        onClick={onGenerateStory}
        disabled={loading}
        className="px-3 py-1.5 border border-white font-medium uppercase disabled:opacity-50"
      >
        Generar Historia
      </button> */}
      <button
        onClick={onUploadTransformedImage}
        disabled={loading || successShare}
        className={`px-3 py-1.5 border border-white font-medium uppercase disabled:opacity-50`}
      >
        {loadingShare ? "Compartiendo..." : "Compartir con la Comunidad"}
      </button>
      <p>{successShare && "¡Gracias, compartido con éxito!"}</p>
    </div>
  );
};
