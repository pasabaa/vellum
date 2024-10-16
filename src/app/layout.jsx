import "./globals.css";
import { Jost } from "next/font/google";
import { defaultURL } from "@/utils";
import { ImageProvider } from "@/context/ImageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(defaultURL),
  alternates: {
    canonical: "/",
  },
  title: "Vellum - Transforma tus fotos con disfraces únicos y creativos",
  description:
    "En Vellum, sube tu foto y elige un disfraz único. Transforma tu imagen en una obra creativa y memorable. ¡Explora un mundo de posibilidades y sorpréndete con tu nueva apariencia!",
  openGraph: {
    title: "Vellum - Transforma tus fotos con disfraces únicos y creativos",
    description:
      "En Vellum, sube tu foto y elige un disfraz único. Transforma tu imagen en una obra creativa y memorable. ¡Explora un mundo de posibilidades y sorpréndete con tu nueva apariencia!",
    url: defaultURL,
    siteName: "Vellum",
    images: [
      {
        url: `${defaultURL}/preview.png`,
        width: 1200,
        height: 630,
        alt: "Vellum - Transforma tus fotos",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vellum - Transforma tus fotos con disfraces únicos y creativos",
    description:
      "En Vellum, sube tu foto y elige un disfraz único. Transforma tu imagen en una obra creativa y memorable. ¡Explora un mundo de posibilidades y sorpréndete con tu nueva apariencia!",
    images: [`${defaultURL}/preview.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased min-h-svh h-svh flex flex-col`}
      >
        <Navbar/>
        <ImageProvider>
          <main>
            {children}
          </main>
        </ImageProvider>
        <Footer/>
      </body>
    </html>
  );
}
