"use client";
import { halloweenCostumePrompts } from "@/data/costumes";
import { CldImage } from "next-cloudinary";
import React, { useRef, useState } from "react";
import { Loading } from "./Loading";
import { ActionBar } from "./ActionBar";
import { Header } from "./Header";

export const Result = () => {
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
      <ActionBar finallyURL={finallyURL} handleDefault={handleDefault} />
    </div>
  );
};
