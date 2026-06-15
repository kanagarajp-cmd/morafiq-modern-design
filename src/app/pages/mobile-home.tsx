import { useState } from "react";
import { motion } from "motion/react";
import morafiqLogo from "../../imports/Morafiq-White-Logo.svg";
import {
  Bell,
  Home,
  PackageCheck,
  Radar,
  ArrowRight,
  Plane,
  Briefcase,
  ShieldCheck,
  Clock,
  DoorOpen,
  CalendarPlus,
  Luggage,
  Star,
  MessageCircle,
  Phone,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

const quickActions = [
  {
    id: "home",
    title: "Home Check-in",
    desc: "Check in your bags and receive your boarding pass from home.",
    icon: Home,
    featured: true,
  },
  {
    id: "land",
    title: "Land & Leave",
    desc: "Skip baggage claim. We deliver your luggage directly to you.",
    icon: PackageCheck,
  },
  {
    id: "track",
    title: "Track Baggage",
    desc: "Monitor your bags in real time throughout your journey.",
    icon: Radar,
  },
];

const reasons = [
  { title: "Doorstep Check-in", icon: DoorOpen },
  { title: "Real-time Tracking", icon: Radar },
  { title: "Secure Handling", icon: ShieldCheck },
  { title: "Airport Time Savings", icon: Clock },
];

const support = [
  { title: "Live Chat", icon: MessageCircle },
  { title: "Call Support", icon: Phone },
  { title: "FAQs", icon: HelpCircle },
];

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "book", label: "Book", icon: CalendarPlus },
  { id: "trips", label: "Trips", icon: Plane },
];

export function MobileHome() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef1ff] via-[#f6f8ff] to-[#eef1ff] py-0 sm:py-8">
      <div className="relative mx-auto flex h-screen w-full max-w-[440px] flex-col overflow-hidden bg-background shadow-[0_30px_90px_-40px_rgba(10,19,56,0.5)] sm:h-[860px] sm:rounded-[2.5rem]">
        {/* soft top glow */}
        <div className="pointer-events-none absolute -left-16 -top-20 size-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 top-10 size-52 rounded-full bg-accent/20 blur-3xl" />

        {/* Sticky top navbar */}
        <header className="relative z-20 shrink-0 border-b border-border bg-card/90 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-5 pb-3 pt-5">
            <span
              aria-label="Morafiq"
              className="block h-7 w-28 bg-primary"
              style={{
                WebkitMaskImage: `url(${morafiqLogo})`,
                maskImage: `url(${morafiqLogo})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
                maskPosition: "left center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-500 py-1.5 pl-1.5 pr-3 shadow-[0_6px_16px_-6px_rgba(217,119,6,0.55)]">
                <span className="grid size-5 place-items-center rounded-full bg-white/95">
                  <Star className="size-3 fill-amber-500 text-amber-500" />
                </span>
                <span className="text-xs leading-none text-white" style={{ fontWeight: 800 }}>1,240</span>
                <span className="text-[0.65rem] uppercase tracking-wide text-white/90" style={{ fontWeight: 600 }}>pts</span>
              </div>
              <button className="relative grid size-10 place-items-center rounded-2xl border border-border bg-card text-navy transition-colors hover:bg-secondary">
                <Bell className="size-[18px]" />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive ring-2 ring-card" />
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="relative flex-1 space-y-7 overflow-y-auto px-5 pb-6 pt-6">
          <div>
            <h1 className="text-2xl text-navy leading-tight" style={{ fontWeight: 800 }}>
              Good Morning,
              <br />
              Aakash 👋
            </h1>
            <p className="mt-1 text-muted-foreground">Travel smarter. Skip airport stress.</p>
          </div>

          {/* Quick actions */}
          <section className="space-y-3">
            {quickActions.map((q, i) => {
              const Icon = q.icon;
              if (q.featured) {
                return (
                  <motion.button
                    key={q.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#2a55ff] to-[#0b1f8f] p-5 text-left text-white shadow-lg"
                  >
                    <div className="pointer-events-none absolute -right-8 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="relative flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-accent text-navy">
                        <Icon className="size-6" />
                      </span>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur" style={{ fontWeight: 600 }}>
                        Most popular
                      </span>
                    </div>
                    <h2 className="relative mt-4 text-xl text-white" style={{ fontWeight: 800 }}>
                      {q.title}
                    </h2>
                    <p className="relative mt-1 max-w-[16rem] text-sm text-white/75">{q.desc}</p>
                    <span className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm text-navy" style={{ fontWeight: 600 }}>
                      Start check-in <ArrowRight className="size-4" />
                    </span>
                  </motion.button>
                );
              }
              return (
                <motion.button
                  key={q.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex w-full items-center gap-4 rounded-[1.5rem] border border-border bg-card p-4 text-left transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-navy" style={{ fontWeight: 700 }}>
                      {q.title}
                    </span>
                    <span className="block text-sm text-muted-foreground">{q.desc}</span>
                  </span>
                  <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              );
            })}
          </section>

          {/* Your Next Trip */}
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-navy" style={{ fontWeight: 700 }}>Your Next Trip</h2>
              <button className="text-sm text-primary" style={{ fontWeight: 600 }}>View all</button>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] bg-navy p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                  EY 0073
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs text-navy" style={{ fontWeight: 700 }}>
                  <span className="size-1.5 rounded-full bg-navy" /> On time
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-3xl text-white" style={{ fontWeight: 800 }}>AUH</p>
                  <p className="text-sm text-white/60">Abu Dhabi</p>
                </div>
                <div className="flex flex-1 flex-col items-center px-3">
                  <Plane className="size-5 text-accent" />
                  <div className="mt-1 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
                <div className="text-right">
                  <p className="text-3xl text-white" style={{ fontWeight: 800 }}>LHR</p>
                  <p className="text-sm text-white/60">London</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <span className="text-white/60">18 June 2026</span>
                <span className="text-white/60">Departs 09:45</span>
              </div>
            </div>
          </section>

          {/* Why Travelers Choose Us */}
          <section>
            <h2 className="mb-3 text-navy" style={{ fontWeight: 700 }}>Why Travelers Choose Us</h2>
            <div className="grid grid-cols-2 gap-3">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="flex items-center gap-3 rounded-2xl bg-secondary p-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="text-sm text-navy" style={{ fontWeight: 600 }}>{r.title}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Promotional banner */}
          <section className="relative overflow-hidden rounded-[1.75rem] bg-accent p-6 text-navy">
            <div className="pointer-events-none absolute -right-6 -top-8 size-32 rounded-full bg-white/40 blur-2xl" />
            <Plane className="absolute -bottom-4 right-3 size-24 -rotate-12 text-navy/10" />
            <h3 className="relative max-w-[14rem] text-2xl" style={{ fontWeight: 800 }}>
              Travel Light. Travel Easy.
            </h3>
            <p className="relative mt-2 max-w-[18rem] text-sm text-navy/70">
              From doorstep pickup to baggage delivery, enjoy a seamless airport experience.
            </p>
            <button className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm text-white" style={{ fontWeight: 600 }}>
              Get started <ArrowRight className="size-4" />
            </button>
          </section>

          {/* Need Help */}
          <section>
            <h2 className="mb-3 text-navy" style={{ fontWeight: 700 }}>Need Help?</h2>
            <div className="grid grid-cols-3 gap-3">
              {support.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.title}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-secondary"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-center text-xs text-navy" style={{ fontWeight: 600 }}>{s.title}</span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Bottom navigation */}
        <nav className="relative z-20 shrink-0 border-t border-border bg-card/95 px-3 pb-3 pt-2 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {navItems.map((n) => {
              const Icon = n.icon;
              const active = activeTab === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => setActiveTab(n.id)}
                  className="flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 transition-colors"
                >
                  <span
                    className={`grid size-10 place-items-center rounded-2xl transition-all ${
                      active ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={`text-[0.7rem] ${active ? "text-primary" : "text-muted-foreground"}`}
                    style={{ fontWeight: active ? 700 : 500 }}
                  >
                    {n.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
