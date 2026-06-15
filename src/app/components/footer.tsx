import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { MorafiqLogo } from "./morafiq-logo";

const cols = [
  { title: "Services", links: ["Home Check-in", "Leave & Lave", "City Check-in", "Pricing"] },
  { title: "Company", links: ["About us", "Careers", "Press", "Partners"] },
  { title: "Support", links: ["Help center", "Track a bag", "Contact", "FAQ"] },
];

export function Footer() {
  return (
    <footer className="bg-navy px-4 pb-10 pt-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <MorafiqLogo className="h-8 w-auto text-white" />
            <p className="mt-4 max-w-xs text-white/60">
              Hands-free travel from Abu Dhabi. Drop the bags, keep the vibes.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5">
              <input
                type="email"
                placeholder="Email for travel perks"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-navy transition-transform hover:scale-105">
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm uppercase tracking-wider text-white/40" style={{ fontWeight: 600 }}>
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/70 transition-colors hover:text-accent">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">© 2026 Morafiq. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
