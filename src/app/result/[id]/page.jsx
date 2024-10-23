"use client";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { LastStep } from "@/components/LastStep";
import { useImage } from "@/context/ImageContext";
import { CldImage } from "next-cloudinary";
import { useRef, useState, useEffect } from "react";
import { Loading } from "@/components/Loading";
import { halloweenCostumePrompts } from "@/data/costumes";
import ImageAnalysis from "@/components/ImageAnalysis";
import Gallery from "@/components/Gallery";

export default function ResultPage({ params }) {
  const id = params.id;
  const imgRef = useRef(null);
  const { imageResource } = useImage();
  const [loading, setLoading] = useState(true);
  const [loadingShare, setLoadingShare] = useState(false);
  const [successShare, setSuccessShare] = useState(false);

  const [currentOption, setCurrentOption] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [storyGenerated, setStoryGenerated] = useState(false);

  const handleCurrentOption = (option, index) => {

    const completedCostumes = localStorage.getItem('completedCostumes') || 0;

    localStorage.setItem('completedCostumes', Number(completedCostumes) + 1);

    setLoadingShare(false);
    setSuccessShare(false);
    setStoryGenerated(false);
    setCurrentOption(option);
    setCurrentIndex(index);
    setLoading(true);
  };

  useEffect(() => {
    const completedCostumes = localStorage.getItem('completedCostumes') || 0;

    localStorage.setItem('completedCostumes', Number(completedCostumes) + 1);
  }, [id])

  useEffect(() => {
    if (currentOption) {
      setLoading(true);
    }
  }, [currentOption]);

  const handleGenerateStory = () => {
    if (imgRef.current?.src) {
      setStoryGenerated(true);
    }
  };

  const onUploadTransformedImage = async () => {

    setLoadingShare(true);

    if (!imgRef.current?.src) {
      setLoadingShare(false);
      console.error("No image source found.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imgRef.current.src);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_SHARE
    );
    formData.append("folder", "phantomlens/share");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error al subir la imagen a Cloudinary");
      }

      const data = await response.json();
      console.log("Imagen subida exitosamente:", data);
      setSuccessShare(true);
    } catch (error) {
      console.error("Error al subir imagen:", error);
    } finally {
      setLoadingShare(false);
    }
  };
  return (
    <Container>
      <Header title={"Resultado"} />
      {imageResource ? (
        <div className="relative w-full border border-neutral-800">
          <CldImage
            ref={imgRef}
            width={imageResource?.width}
            height={imageResource?.height}
            src={imageResource?.public_id}
            alt="Imagen Transformada"
            sizes="100vw"
            className="object-scale-down w-9/12 h-auto relative mx-auto"
            onLoad={() => setLoading(false)}
            replace={{
              from: "clothing",
              to: currentOption ? currentOption.value : id,
            }}
          />
          {loading && (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-neutral-950/90 backdrop-blur-2xl p-4 text-center">
              <Loading />
            </div>
          )}
        </div>
      ) : (
        <p>No se ha subido ninguna imagen</p>
      )}
      {imageResource && <LastStep loading={loading} url={imgRef?.current?.src} onGenerateStory={handleGenerateStory} onUploadTransformedImage={onUploadTransformedImage} loadingShare={loadingShare} successShare={successShare} />}
      <div className="mt-8 mb-16">
        <h2 className="font-medium text-lg mb-4">Más Disfraces</h2>
        <div className="flex flex-wrap gap-2.5 h-28 overflow-y-scroll">
          {halloweenCostumePrompts?.map((costume, i) => (
            <button
              disabled={loading}
              className={`transition-colors hover:bg-white hover:text-black p-2 bg-neutral-900 text-sm ${
                currentIndex === i && 'bg-white text-black font-medium'
              } disabled:opacity-50`}
              onClick={() => handleCurrentOption(costume, i)}
              key={i}
              value={costume?.value}
            >
              {costume?.text}
            </button>
          ))}
        </div>
      </div>

      <ImageAnalysis imageUrl={imgRef?.current?.src} storyGenerated={storyGenerated}/>

      <Gallery successShare={successShare}/>
     
    </Container>
  );
}