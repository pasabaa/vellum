import { downloadPhoto } from "@/utils";
import { Download, Printer, Share2, X } from "lucide-react";
import React from "react";

export const ActionBar = ({ finallyURL, handleDefault }) => {

  const filename = "Vellum_" + new Date().getTime();

  const handlePrint = () => {
    window.print();
  };

  const shareData = {
    title: "Vellum",
    text: "Descubre tu historia de terror personalizada",
    url: finallyURL,
  };

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Error al compartir:", err);
    }
  };

  return (
    <div className="flex gap-2 sticky bottom-0 mt-auto bg-neutral-950 py-4 print:hidden">
      <button
        disabled={!finallyURL}
        onClick={() => downloadPhoto(finallyURL, filename)}
        aria-label="Botón Descargar"
        title="Descargar"
        className="bg-white text-black hover:bg-neutral-200 rounded-lg px-4 py-2 flex gap-2 items-center justify-center flex-1 transition-colors disabled:opacity-50"
      >
        Descargar <Download size={20} />
      </button>
      <button
        onClick={handleShare}
        aria-label="Botón Compartir"
        title="Compartir"
        className="hover:bg-neutral-600/40 rounded-lg px-4 py-2 transition-colors"
      >
        <Share2 size={20} />
      </button>
      <button
        onClick={handlePrint}
        aria-label="Botón Imprimir"
        title="Imprimir"
        className="hover:bg-neutral-600/40 rounded-lg px-4 py-2 transition-colors"
      >
        <Printer size={20} />
      </button>
      <button
        onClick={handleDefault}
        aria-label="Botón Cerrar"
        title="Cerrar"
        className="hover:bg-neutral-600/40 rounded-lg px-4 py-2 transition-colors"
      >
        <X size={20} />
      </button>
    </div>
  );
};
