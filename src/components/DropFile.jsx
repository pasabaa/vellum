"use client";
import { ArrowUpFromLine, Check } from "lucide-react";
import React, { useState, useRef } from "react";
import { useImage } from "@/context/ImageContext";
import { NextStep } from "./NextStep";
import { AnimatePresence } from "framer-motion";

export const DropFile = () => {
  const { setImageResource } = useImage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);

  const uploadCloudinary = async (file) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("folder", "phantomlens");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error al subir la imagen");
      }

      const data = await response.json();
      setImageResource(data);
      setSuccess(true);
    } catch (err) {
      setError("Hubo un problema al subir la imagen. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadCloudinary(file);
    }
  };

  const handleInputFile = () => {
    inputRef?.current?.click();
  };

  return (
    <>
      <div className="mt-4">
        <div className="relative">
          <button
            className={`font-semibold flex flex-col gap-2 w-full h-40 bg-neutral-800 items-center justify-center hover:bg-white active:bg-white active:text-black hover:text-black transition-colors my-auto relative`}
            onClick={handleInputFile}
            disabled={loading}
          >
            <ArrowUpFromLine size={28} />
            {loading ? (
              <span className="animate-pulse">Subiendo...</span>
            ) : (
              <span>Cargar Imagen</span>
            )}
            <span className="text-sm text-neutral-400">Máx. 2MB</span>
          </button>

          {success && (
            <div className="absolute inset-0 bg-white text-black h-40 w-full flex flex-col gap-2 items-center justify-center">
              <Check size={38} />
              <span className="font-medium max-w-[18rem] text-center">¡Imagen cargada! Puedes continuar con el siguiente paso.</span>
            </div>
          )}
        </div>

        <input
          onChange={onFileChange}
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
        />

        {error && <p className="text-neutral-400 font-medium">{error}</p>}
      </div>

      <AnimatePresence>
        {success && <NextStep name={"Siguiente"} url={"/costume"} />}
      </AnimatePresence>

    </>
  );
};
