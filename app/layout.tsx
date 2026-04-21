import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RECI - Registro de Ciencia e Investigación | CPPC SOCIMEP",
  description:
    "Plataforma institucional de gestión de la producción científica. Control total de investigación en un solo lugar.",
  keywords: [
    "investigación",
    "ciencia",
    "SOCIMEP",
    "producción científica",
    "sociedades científicas",
  ],
};

export const viewport: Viewport = {
  themeColor: "#216402",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
