import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MorafiqLogo } from "./morafiq-logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "How it works", href: "#how" },
  { label: "Why Morafiq", href: "#why" },
  { label: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-navy/85 shadow-[0_8px_40px_-12px_rgba(7,16,58,0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 text-white">
          <MorafiqLogo className="h-7 w-auto" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[0.95rem] text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#services"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[0.95rem] text-navy transition-transform hover:scale-[1.03] sm:inline-block"
            style={{ fontWeight: 600 }}
          >
            Book now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full bg-white/10 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-navy/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-2xl bg-accent px-4 py-3 text-center text-navy"
            style={{ fontWeight: 600 }}
          >
            Book now
          </a>
        </div>
      )}
    </header>
  );
}
