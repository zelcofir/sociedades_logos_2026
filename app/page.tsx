"use client";

import Link from "next/link";
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted to-background py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            Gestión de la producción científica
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-primary font-semibold mb-6"
          >
            Control total en un solo lugar
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            El CPPC SOCIMEP presenta la plataforma institucional para el
            registro, seguimiento y visualización de la producción científica de
            las sociedades científicas de estudiantes de medicina del Perú.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/registro"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Registrar ahora
            </Link>
            <Link
              href="/sociedades"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-colors"
            >
              Ver registro local
            </Link>
          </motion.div>
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
