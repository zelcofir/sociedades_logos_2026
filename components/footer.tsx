import { Instagram, Facebook, Globe } from "lucide-react";

const socialLinks = {
  cppc: {
    name: "CPPC SOCIMEP",
    instagram: "https://www.instagram.com/cppcsocimep/",
    facebook: "https://www.facebook.com/cppcsocimep/",
  },
  yachay: {
    name: "Yachay Health Research",
    instagram: "https://www.instagram.com/yachay.health.research/",
    facebook: "https://www.facebook.com/profile.php?id=61586526951133",
    website: "https://sites.google.com/d/10e4wimIK4J1ud1UXGwzTMdOZtNZkcQjL/p/14ItKHkin2H0t5zDOkM0aGZgzcOEtiRRC/edit",
  },
};

export function Footer() {
  return (
    <footer className="bg-footer py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* CPPC SOCIMEP */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3">{socialLinks.cppc.name}</h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href={socialLinks.cppc.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram de CPPC SOCIMEP"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.cppc.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook de CPPC SOCIMEP"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Yachay Health Research */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-3">{socialLinks.yachay.name}</h3>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href={socialLinks.yachay.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram de Yachay Health Research"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.yachay.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook de Yachay Health Research"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.yachay.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Página web de Yachay Health Research"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6">
          <div className="text-center">
            <p className="text-white/90 text-sm leading-relaxed">
              &copy; 2026 &ndash; Plataforma del Registro de Ciencia e Investigación
              (RECI) &ndash; Versión 1.0
            </p>
            <p className="text-white/70 text-xs mt-2">
              Desarrollado por Yachay Health Research. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
