"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

interface SocietyCardProps {
  name: string;
  driveId: string;
  logo: string;
  index: number;
}

export function SocietyCard({ name, driveId, logo, index }: SocietyCardProps) {
  const driveUrl = `https://drive.google.com/drive/folders/${driveId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
    >
      {/* Logo */}
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden mb-4">
        <Image
          src={logo}
          alt={`Logo de ${name}`}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-foreground text-sm mb-4 min-h-[40px] flex items-center">
        {name}
      </h3>

      {/* Button */}
      <a
        href={driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors w-full"
      >
        <FolderOpen className="w-4 h-4" />
        Carpeta de Investigación
      </a>
    </motion.div>
  );
}
