import { motion } from "motion/react";
import { CalendarCheck, PackageCheck, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book in seconds",
    body: "Choose your service and a time slot. No calls, no paperwork — just a few taps.",
  },
  {
    icon: PackageCheck,
    title: "We handle the bags",
    body: "A vetted Morafiq agent collects, seals and checks your luggage with live tracking.",
  },
  {
    icon: PlaneTakeoff,
    title: "Show up & fly",
    body: "Walk into the airport hands-free and stroll straight to your gate. That's it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-sm uppercase tracking-[0.2em] text-primary" style={{ fontWeight: 600 }}>
            How it works
          </span>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] text-navy" style={{ fontWeight: 800 }}>
            Three steps. Zero stress.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-7"
              >
                <span
                  className="absolute -right-2 -top-4 text-[6rem] leading-none text-secondary"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {i + 1}
                </span>
                <span className="relative grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                  <Icon className="size-7" />
                </span>
                <h3 className="relative mt-6 text-xl text-navy" style={{ fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p className="relative mt-2 text-muted-foreground">{s.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
