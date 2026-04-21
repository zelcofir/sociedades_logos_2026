"use client";

import { motion } from "framer-motion";
import { FileSearch } from "lucide-react";

export default function RegistroPage() {
  return (
    <div className="pt-16">
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Registro de Producción Científica
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete el formulario para registrar su producción científica en
              la base de datos institucional.
            </p>
          </motion.div>

          {/* Embedded Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
          >
            <iframe
              src="https://script.google.com/macros/s/AKfycbw3Sh8TctcKt9-uOdxSg8Ql9hUVbMRqya3jzTrcwlk9dLyks9Q75jq6G2wUzM4NtVou/exec"
              className="w-full min-h-[2000px] border-0"
              title="Formulario de Registro RECI"
              loading="lazy"
            />
          </motion.div>

          {/* Institutional Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted border border-gray-200 rounded-xl p-6 flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FileSearch className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2">
                Nota institucional
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                La información registrada será verificada por el equipo
                encargado antes de su publicación en la base de datos
                institucional, con fines académicos, estadísticos y de
                visibilidad científica.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
