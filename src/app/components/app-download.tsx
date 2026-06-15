import { Apple, Play, Check } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AppDownload() {
  return (
    <section className="bg-background px-4 pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-md text-[clamp(2rem,4.5vw,3rem)] leading-[1.02]" style={{ fontWeight: 800 }}>
              Your bags, in your pocket.
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/80">
              Book, track and manage every pickup from the Morafiq app. Travel
              light — the whole journey lives on your phone.
            </p>

            <ul className="mt-6 space-y-2.5">
              {["Real-time bag tracking", "One-tap rebooking", "Instant boarding passes"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/90">
                  <span className="grid size-5 place-items-center rounded-full bg-accent text-navy">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/app" className="inline-flex items-center gap-3 rounded-2xl bg-navy px-5 py-3 transition-transform hover:scale-[1.03]">
                <Apple className="size-6" />
                <span className="text-left leading-tight">
                  <span className="block text-xs text-white/70">Download on the</span>
                  <span className="block" style={{ fontWeight: 700 }}>App Store</span>
                </span>
              </Link>
              <Link to="/app" className="inline-flex items-center gap-3 rounded-2xl bg-navy px-5 py-3 transition-transform hover:scale-[1.03]">
                <Play className="size-6" />
                <span className="text-left leading-tight">
                  <span className="block text-xs text-white/70">Get it on</span>
                  <span className="block" style={{ fontWeight: 700 }}>Google Play</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs">
            <div className="rotate-3 overflow-hidden rounded-[2rem] border-4 border-navy bg-navy shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=900&fit=crop&auto=format"
                alt="Morafiq mobile app in use"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 top-8 -rotate-6 rounded-2xl bg-accent px-4 py-3 text-navy shadow-xl">
              <p className="text-xs" style={{ fontWeight: 600 }}>Bag picked up</p>
              <p className="font-mono text-[0.7rem]" style={{ fontFamily: "var(--font-mono)" }}>09:42 · today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
