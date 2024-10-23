'use client'
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from 'react';

export default function Gallery({successShare}) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/get-images');
      
      if (!response.ok) {
        throw new Error('Error al obtener las imágenes');
      }

      const data = await response.json();
      setImages(data.resources);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, [successShare]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
        <h2 className="font-semibold text-2xl mb-4">Disfraces de la Comunidad</h2>
        {
            isLoading && <div className="animate-pulse">Cargando imágenes...</div>
        }
        <div className="columns-2 md:columns-3 xl:columns-4 gap-4">
        {images.map((image) => (
            <div className="break-inside-avoid mb-6" key={image?.public_id}>
                <CldImage
                    src={image?.public_id}
                    alt={image?.public_id}
                    width={image?.width}
                    height={image?.height}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

        ))}
        </div>
    </section>
  );
}