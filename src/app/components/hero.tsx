import { motion } from "motion/react";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy px-4 pb-20 pt-32 text-white sm:pb-28 sm:pt-36"
    >
      {/* glow blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 size-80 rounded-full bg-primary/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-96 rounded-full bg-accent/20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur"
          >
            <MapPin className="size-3.5 text-accent" />
            <span className="text-sm text-white/80">Now flying across Abu Dhabi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 max-w-xl text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.95] tracking-tight"
            style={{ fontWeight: 800 }}
          >
            Bags? <span className="text-accent">Handled.</span>
            <br />
            You? Hands Free.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-md text-lg text-white/70"
          >
            We grab, check and ship your luggage — so you roll up to the
            airport carrying nothing but vibes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-navy transition-transform hover:scale-[1.03]"
              style={{ fontWeight: 600 }}
            >
              Pick your service
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-white/90 transition-colors hover:bg-white/10"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
              <span className="ml-1 text-sm text-white/70">4.9 · 12k+ trips</span>
            </div>
            <div className="h-6 w-px bg-white/15" />
            <span className="text-sm text-white/70">Insured to AED 5,000</span>
          </motion.div>
        </div>

        {/* Floating visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=900&h=1000&fit=crop&auto=format"
              alt="Traveller walking through the airport hands-free"
              className="h-[440px] w-full object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-10 rounded-2xl border border-white/10 bg-white p-3 text-navy shadow-2xl"
          >
            <p className="font-mono text-[0.7rem] text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
              BAG · AUH→LHR
            </p>
            <p className="text-sm" style={{ fontWeight: 700 }}>On its way ✈</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-accent px-4 py-3 text-navy shadow-2xl"
          >
            <span className="relative grid size-9 place-items-center rounded-full bg-navy">
              <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative size-2.5 rounded-full bg-accent" />
            </span>
            <div className="leading-tight">
              <p className="text-sm" style={{ fontWeight: 800 }}>Live tracking</p>
              <p className="text-xs" style={{ fontWeight: 600 }}>door → gate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
