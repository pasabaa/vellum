import { Cloud, Code, Flame, Palette, Sparkles, Wand, WandSparkles } from "lucide-react";

export const awards = [
    {
      title: "Creador de Fantasías",
      description: "¡Felicidades! Has creado tu primer disfraz. La magia está en tus manos.",
      umbral: 1,
      icon: <Wand />
    },
    {
      title: "Maestro de la Transformación",
      description: "¡Increíble! Has creado 5 disfraces. La creatividad nunca se detiene.",
      umbral: 5,
      icon: <Flame />
    },
    {
      title: "Artista del Vestuario",
      description: "¡Bravo! Has llegado a 10 disfraces. Tu talento no tiene límites.",
      umbral: 10,
      icon: <Palette />
    },
    {
      title: "El Conjurador",
      description: "¡Fantástico! Has creado 20 disfraces. Eres un verdadero conjurador de disfraces.",
      umbral: 20,
      icon: <WandSparkles />
    },
    {
      title: "Mago del Diseño",
      description: "¡Impresionante! Has creado 50 disfraces. Tu magia brilla por sí sola.",
      umbral: 50,
      icon: <Sparkles />
    },
  ];
  