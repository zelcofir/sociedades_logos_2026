"use client";

import { motion } from "framer-motion";
import { SocietyCard } from "@/components/society-card";
import { RegionSection } from "@/components/region-section";

// Society data organized by region
const societies = {
  norte: [
    { name: "ASOCIEM USAT", driveId: "12JcAeJkrAXqAAdkSmqaCURJ3QiyD_xsK", logo: "/logos/1.png" },
    { name: "ASOCIEM USS", driveId: "1Kn1Q4avXk4Hmyn8nvsRnKmutUHz5PaDR", logo: "/logos/2.png" },
    { name: "SCIEMVE", driveId: "15dBEvNfiy0DCPO1UQfWVFNdzxuVGN__T", logo: "/logos/3.png" },
    { name: "SOCEMUNS", driveId: "1zNKe3WP6sMwN62ly8_6T5j820HKue0lu", logo: "/logos/4.png" },
    { name: "SOCEMUNT", driveId: "1Yd0hzO4w6JgIFHg2zu36jSK8L4qATuNc", logo: "/logos/5.png" },
    { name: "SOCIEMUCV PIURA", driveId: "1uqR9cCNt9tnZpZzvkeJPDunFamm1Wb3j", logo: "/logos/6.png" },
    { name: "SOCIEM UCV TRUJILLO", driveId: "1IsQcMmVzdCRstYgW0msNBIgJWMRh-h7Y", logo: "/logos/7.png" },
    { name: "SOCIEM UNPRG", driveId: "1Lazx7KSPB8uQRf6ariYBigy56bpCNzLA", logo: "/logos/8.png" },
    { name: "SOCIEM-UPAO", driveId: "1W5UYQSQdu3iEMlmbbglN2byXXbr0qPtQ", logo: "/logos/9.png" },
    { name: "SOCIEM UPAO PIURA", driveId: "1zE_Ew5590IP-ISmfeMvoKamlMUfvDcRS", logo: "/logos/10.png" },
    { name: "SOCIEMCA", driveId: "1RwKnRK5jocm4KFKOB8pIbcroBTI_P-Nf", logo: "/logos/11.png" },
    { name: "SOCIEMSA", driveId: "1dpIGjpvsUQiD-DcXEtO7uXZv2mgTlkMi", logo: "/logos/12.png" },
    { name: "SOCIEMUNP", driveId: "1cEinR4hf3rWHHoChYBhhdU99ELacsqKn", logo: "/logos/13.png" },
    { name: "SOCIEMUN TUMBES", driveId: "1wGzoRlNtym1rFHtOmtqzJeyk9n3psq1_", logo: "/logos/14.png" },
    { name: "SOCIEM UNTRM", driveId: "160_0mvSN1I2bbUWXnSU-ifiv-mBP_GST", logo: "/logos/15.png" },
  ],
  centro: [
    { name: "SCHEM", driveId: "1fYb3RnnnpH1E2YUNyKgCWhrC3EWPtP2F", logo: "/logos/16.png" },
    { name: "SCIEM UCSUR", driveId: "1Suqxtf2ZOpG2hMZUl_QmYJjWjjF8mXe4", logo: "/logos/17.png" },
    { name: "SOCEMCH", driveId: "1nEtnW2O-VMS85W52LKuNDKmQpfJJFL70", logo: "/logos/18.png" },
    { name: "SOCEMI", driveId: "11vVBb0xF-Gr9EjpyfrNVqW7cj-F6VExQ", logo: "/logos/19.png" },
    { name: "SOCEMURP", driveId: "18EzLP2bwlgxY63YiCWM-mVUwAHGAH8Rx", logo: "/logos/20.png" },
    { name: "SOCEMVI", driveId: "1HV7QIR9V3gL-eAQqINRyyXKxJdWYvCf3", logo: "/logos/21.png" },
    { name: "SOCEM UPEU", driveId: "1DvsT3nojREHDS4IZ0MSboSPFq25yaf7M", logo: "/logos/22.png" },
    { name: "SOCIEM-UPSJB", driveId: "1MFCpkWtdjSDcp2ch1b4mhqJumSFoeG-Y", logo: "/logos/23.png" },
    { name: "SOCIEMAP", driveId: "1K2_tNWYfQOeddT3BtVujCTl9xa2sfI_X", logo: "/logos/24.png" },
    { name: "SOCIEMC", driveId: "1ntUw5Sqkju0tLcO93x9XgOovPe4FLcQy", logo: "/logos/25.png" },
    { name: "SOCIEMLA", driveId: "1S81BpRvKjDkRPVjN4klCg0vcDkzATWKx", logo: "/logos/26.png" },
    { name: "SOCIEMU", driveId: "11dUd4-fTk6ZhPMTsirhFuL-Z7hCSCExJ", logo: "/logos/27.png" },
    { name: "SOCIEMUPC", driveId: "1PxmdSvd60SdkCo9i_Ryeygu8UX7xiqZO", logo: "/logos/28.png" },
    { name: "SOCIEM-USMP", driveId: "1uXVlBT2a65tpji5I7ap6aVzuPYJXoXvT", logo: "/logos/29.png" },
    { name: "SOCIMEC", driveId: "1ywQN5-X9Q7L_eNiaj3TYFtRI4tYYfnaB", logo: "/logos/30.png" },
    { name: "SOCIMESC", driveId: "1DNExH5IMPtVI_tRq4xxR3O3jxVx7qYAP", logo: "/logos/31.png" },
    { name: "ASICEM UPSJB ICA", driveId: "13PCIN4PXuSGbHIvbHcVkuMLqizX29mSN", logo: "/logos/32.png" },
    { name: "SOCIEM UNW", driveId: "1DVJvLR_I0K81GT3lirKZEiV59594Tked", logo: "/logos/33.png" },
    { name: "ASCEM CEAC", driveId: "1p_EebkTkwcSehNaUfjfQm7_Zq1zb_6f3", logo: "/logos/42.png" },
  ],
  sur: [
    { name: "ACIEMH ANDINA", driveId: "1h0cYk5tlgH8XrniGNKhnTiLyijnIrywp", logo: "/logos/34.png" },
    { name: "ASOCIEMH CUSCO", driveId: "1q4vyGIp3J2Oi8F31MN2yPAkeEqHyVXOz", logo: "/logos/35.png" },
    { name: "CECIBEM", driveId: "1y1x4tr-L64DYLXsaLoRFkSEBcSICcj2v", logo: "/logos/36.png" },
    { name: "CIEM", driveId: "15e2oKxkt0IAX6jS_Zy1GHcq6GDZgFvU_", logo: "/logos/37.png" },
    { name: "CIESMED", driveId: "1QamySFhlR2eAhc4GfnDM1ooxMLTa-0dw", logo: "/logos/38.png" },
    { name: "SOCIEMA", driveId: "11ie_z_jFasZpZD7-HQSs6g5fHstWkrj", logo: "/logos/39.png" },
    { name: "SOCIEM-UNA PUNO", driveId: "1ffz4Am-IH8l-sBbWdy_hPyfxFBSJErvh", logo: "/logos/40.png" },
  ],
};

export default function SociedadesPage() {
  return (
    <div className="pt-16">
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Registro de producción científica local
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              Memoria de la producción científica CPPC
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un repositorio centralizado que salvaguarda cada aporte científico de las sociedades locales.
            </p>
          </motion.div>

          {/* Region Norte */}
          <RegionSection title="Consejería Regional Norte" delay={0.1}>
            {societies.norte.map((society, index) => (
              <SocietyCard key={society.name} {...society} index={index} />
            ))}
          </RegionSection>

          {/* Region Centro */}
          <RegionSection title="Consejería Regional Centro" delay={0.2}>
            {societies.centro.map((society, index) => (
              <SocietyCard key={society.name} {...society} index={index} />
            ))}
          </RegionSection>

          {/* Region Sur */}
          <RegionSection title="Consejería Regional Sur" delay={0.3}>
            {societies.sur.map((society, index) => (
              <SocietyCard key={society.name} {...society} index={index} />
            ))}
          </RegionSection>
        </div>
      </section>
    </div>
  );
}
