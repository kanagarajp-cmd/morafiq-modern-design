import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ArrowRight, Clock } from "lucide-react";
import { services } from "./services-data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServiceSelector() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId)!;

  return (
    <section id="services" className="bg-background px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="rounded-full bg-secondary px-4 py-1.5 text-sm text-primary"
            style={{ fontWeight: 600 }}
          >
            Pick your move
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05] text-navy" style={{ fontWeight: 800 }}>
            One card. Three ways to travel unburdened.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tap a service to see exactly what you get, what it costs, and how it goes down.
          </p>
        </div>

        <div className="mt-12 grid gap-4 overflow-hidden rounded-[2.5rem] border border-border bg-card p-4 shadow-[0_30px_80px_-40px_rgba(10,19,56,0.35)] md:p-6 lg:grid-cols-[0.95fr_1.4fr]">
          {/* Selector list */}
          <div className="flex flex-col gap-3">
            {services.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`group relative flex items-center gap-4 rounded-3xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-transparent bg-navy text-white shadow-lg"
                      : "border-border bg-background hover:border-primary/30 hover:bg-secondary"
                  }`}
                >
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-2xl transition-colors ${
                      isActive ? "bg-accent text-navy" : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="truncate" style={{ fontWeight: 700 }}>
                        {s.name}
                      </span>
                      {s.popular && (
                        <span className="rounded-full bg-accent px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-navy" style={{ fontWeight: 700 }}>
                          Popular
                        </span>
                      )}
                    </span>
                    <span className={`block text-sm ${isActive ? "text-white/65" : "text-muted-foreground"}`}>
                      {s.tagline}
                    </span>
                  </span>
                  <ArrowRight
                    className={`size-5 shrink-0 transition-all ${
                      isActive ? "translate-x-0 text-accent opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}

            <div className="mt-auto hidden rounded-3xl bg-secondary p-5 lg:block">
              <p className="text-sm text-muted-foreground">Not sure which one?</p>
              <p className="mt-1 text-navy" style={{ fontWeight: 600 }}>
                Most travellers start with Home Check-in for a fully hands-free run. 🛬
              </p>
            </div>
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-[2rem] border border-border bg-background"
            >
              <div className="relative h-52 w-full bg-secondary sm:h-60">
                <ImageWithFallback
                  src={active.image}
                  alt={active.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <p className="text-sm text-white/75">{active.tagline}</p>
                    <h3 className="text-2xl text-white" style={{ fontWeight: 800 }}>
                      {active.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-sm backdrop-blur">
                    <Clock className="size-4 text-accent" />
                    {active.duration}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-muted-foreground">{active.description}</p>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {active.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-navy">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl bg-secondary p-3">
                  {active.steps.map((step, i) => (
                    <div key={step.label} className="px-2">
                      <span
                        className="font-mono text-xs text-primary"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        0{i + 1}
                      </span>
                      <p className="mt-1 text-navy" style={{ fontWeight: 600 }}>
                        {step.label}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{step.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-3xl text-navy" style={{ fontWeight: 800 }}>
                      {active.price}
                    </span>
                    <span className="ml-1.5 text-muted-foreground">{active.priceNote}</span>
                  </div>
                  <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-primary-foreground transition-transform hover:scale-[1.03]" style={{ fontWeight: 600 }}>
                    Book {active.name}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
