'use client'
import { createContext, useContext, useState } from "react";

// Crear el contexto
const ImageContext = createContext();

// Proveedor de contexto para envolver la aplicación
export const ImageProvider = ({ children }) => {
  const [imageResource, setImageResource] = useState(null);

  return (
    <ImageContext.Provider value={{ imageResource, setImageResource }}>
      {children}
    </ImageContext.Provider>
  );
};

// Hook para usar el contexto de imagen
export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage debe ser utilizado dentro de ImageProvider");
  }
  return context;
};