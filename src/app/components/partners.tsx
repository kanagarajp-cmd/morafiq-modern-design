import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import airArabia from "../../imports/Air-Arabia-Logo-1024x377.png";
import egyptair from "../../imports/Egyptair-logo.png";
import etihad from "../../imports/Etihad-Airways-Logo.png";
import indigo from "../../imports/Indigo.png";
import wizz from "../../imports/wizz_logo_2_ed1e0268-e1702449186115-2.png";

const partners = [
  { name: "Etihad Airways", logo: etihad },
  { name: "Air Arabia", logo: airArabia },
  { name: "EgyptAir", logo: egyptair },
  { name: "IndiGo", logo: indigo },
  { name: "Wizz Air", logo: wizz },
];

export function Partners() {
  return (
    <section id="partners" className="bg-secondary px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-primary" style={{ fontWeight: 600 }}>
            Airline partners
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.05] text-navy" style={{ fontWeight: 800 }}>
            We check you in with the airlines you fly.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Morafiq is integrated with leading carriers flying out of Abu Dhabi — your bags go straight to your flight.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group grid h-28 place-items-center rounded-3xl border border-border bg-card px-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(10,19,56,0.4)]"
            >
              <ImageWithFallback
                src={p.logo}
                alt={p.name}
                className="max-h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
