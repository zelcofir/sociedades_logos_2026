"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, FileCheck, Eye } from "lucide-react";

const pillars = [
  {
    icon: BarChart3,
    title: "Visualización de impacto",
    description: "Monitorea y analiza el alcance de tu producción científica.",
  },
  {
    icon: FileCheck,
    title: "Estandarización profesional",
    description: "Registros uniformes y validados por el comité institucional.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Acceso abierto a la información de investigación.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.png"
            alt="CPPC SOCIMEP Banner"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability on left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Content - Left aligned */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
            >
              Registro de Ciencía e Investigación
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-white/90 font-semibold mb-6"
            >
              Control total en un solo lugar
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg mb-10 leading-relaxed"
            >
              El CPPC SOCIMEP presenta la plataforma institucional para el
              registro, seguimiento y visualización de la producción científica de
              las sociedades científicas de estudiantes de medicina del Perú.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/registro"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Registrar ahora
              </Link>
              <Link
                href="/sociedades"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary transition-colors"
              >
                Ver registro local
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            Oportunidades
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
