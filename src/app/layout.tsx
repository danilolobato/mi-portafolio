import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import AccentPicker from "@/components/AccentPicker";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danilo | Desarrollador web",
  description: "Portafolio de desarrollo web full stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={font.className}>
        <Loader />
        <Background />
        <ScrollProgress />
        <Cursor />
        <AccentPicker />
        {children}
      </body>
    </html>
  );
}