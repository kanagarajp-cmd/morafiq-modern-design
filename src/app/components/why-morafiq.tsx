import { motion } from "motion/react";
import { ShieldCheck, Radar, Zap, HeartHandshake } from "lucide-react";

const stats = [
  { value: "12k+", label: "Trips made hands-free" },
  { value: "4.9★", label: "Average traveller rating" },
  { value: "60min", label: "Average pickup time" },
  { value: "24/7", label: "Support, every day" },
];

const perks = [
  {
    icon: ShieldCheck,
    title: "Fully insured",
    body: "Every bag is sealed, tracked and covered up to AED 5,000.",
  },
  {
    icon: Radar,
    title: "Live tracking",
    body: "Watch your luggage move from your door to the gate in real time.",
  },
  {
    icon: Zap,
    title: "Lightning quick",
    body: "Book in seconds, pickups in under an hour across the city.",
  },
  {
    icon: HeartHandshake,
    title: "Real humans",
    body: "Vetted agents and 24/7 chat support whenever you need it.",
  },
];

export function WhyMorafiq() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy px-4 py-24 text-white">
      <div className="pointer-events-none absolute -right-20 top-1/3 size-96 rounded-full bg-primary/30 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-accent" style={{ fontWeight: 600 }}>
              Why Morafiq
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05]" style={{ fontWeight: 800 }}>
              Built for people who'd rather not lug stuff around.
            </h2>
          </div>
          <p className="text-lg text-white/70">
            We turned the most annoying part of travel into a couple of taps.
            Trusted by thousands of travellers flying out of Abu Dhabi every month.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-4xl text-accent" style={{ fontWeight: 800 }}>
                {s.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.07]"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-navy">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg" style={{ fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/65">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
