import { Container } from "@/components/Container";
import { DropFile } from "@/components/DropFile";
import { Header } from "@/components/Header";
import { NextStep } from "@/components/NextStep";
import React from "react";

export default function HomePage() {
  return (
    <Container>
      <Header
        title={"Carga tu Imagen"}
        info={"Selecciona una fotografía en la que aplicaremos el disfraz de tu elección"}
      />
      <DropFile/>
      
    </Container>
  );
}
