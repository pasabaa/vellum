"use client";
import { halloweenCostumePrompts } from "@/data/costumes";
import { CldImage } from "next-cloudinary";
import React, { useRef, useState } from "react";
import { Loading } from "./Loading";
import { ActionBar } from "./ActionBar";
import { Header } from "./Header";

export const Costume = ({ resource, handleDefault }) => {
  const inputSelectRef = useRef(null);
  const imageRef = useRef(null);
  const [option, setOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const finallyURL = imageRef?.current?.src;

  const handleTransformImage = () => {
    setOption(inputSelectRef.current.value);
    setLoading(true);
    setError(null);
  };

  const handleImageLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div>
      {!error && (
        <CldImage
          ref={imageRef}
          width={resource?.width}
          height={resource?.height}
          src={resource?.public_id}
          alt="Imagen Transformada"
          sizes="100vw"
          className="object-scale-down w-80 h-auto relative"
          onLoad={handleImageLoad}
          onError={handleImageError}
          replace={{
            from: "clothing",
            to: `${encodeURIComponent(option)}`,
          }}
        />
      )}
      {loading && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-neutral-900 p-4 text-center">
          <Loading />
        </div>
      )}

      <h2 className="mt-8 mb-4 font-bold print:hidden">Escoge un disfraz</h2>
      <select
        ref={inputSelectRef}
        className="bg-neutral-800 p-4 rounded-lg w-full px-4 py-2 print:hidden"
        name="costume"
        id="costume"
        required
      >
        {halloweenCostumePrompts?.map((costume, i) => (
          <option key={i} value={costume?.value}>
            {costume?.text}
          </option>
        ))}
      </select>

      <button
        disabled={loading}
        onClick={handleTransformImage}
        className="font-medium mt-4 bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2 flex gap-2 items-center justify-center w-full transition-colors disabled:bg-red-900/60 print:hidden"
      >
        {loading ? "Cargando..." : "Disfrazarme"}
      </button>

      <ActionBar finallyURL={finallyURL} handleDefault={handleDefault} />
    </div>
  );
};
