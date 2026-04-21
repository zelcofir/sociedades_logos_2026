"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RegionSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export function RegionSection({
  title,
  children,
  delay = 0,
}: RegionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-12"
    >
      <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-primary/20">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {children}
      </div>
    </motion.section>
  );
}
