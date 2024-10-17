import { Container } from "@/components/Container";
import { ChevronRight } from "lucide-react";
import { Enriqueta } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const enriqueta = Enriqueta({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <Container>
      <Image className="absolute top-0 left-0 w-full h-full object-cover -z-10" alt="cover" src={'https://res.cloudinary.com/dvuqzso8k/image/upload/v1727287428/mundo-mitico/3348fba4-30bf-4cb0-90da-b75039f2d66e_ua9tll.png'} width={1920} height={1080}/>
      <div className="bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950 absolute top-0 left-0 w-full h-full -z-10"/>
      <h1 className={`text-5xl text-white ${enriqueta?.className}`}>Vellum</h1>
      <div className="text-neutral-400 mt-4 space-y-4">
        <p>
          <strong>Vellum</strong> es una experiencia interactiva única donde
          puedes subir tu propia fotografía o imagen y transformarla en un
          disfraz espectacular.
        </p>
        <p>
          Cada elección que hagas te permitirá experimentar con diferentes looks
          y crear una imagen <strong>memorable</strong>.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <hr className="w-full mt-4" />
        <Link
          className="px-3 py-1.5 bg-white text-black font-medium mt-4 uppercase flex items-center max-w-max"
          href={"/home"}
        >
          Comenzar <ChevronRight />
        </Link>
      </div>
    </Container>
  );
}
