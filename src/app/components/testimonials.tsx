import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Layla A.",
    handle: "@laylaontour",
    text: "Genuinely the smoothest airport run of my life. Bags gone, hands free, vibes immaculate. 🧳✨",
    color: "bg-accent text-navy",
  },
  {
    name: "Omar R.",
    handle: "@omarflies",
    text: "Booked Home Check-in at 6am, was at the gate by 9 with literally nothing in my hands. Unreal.",
    color: "bg-primary text-white",
  },
  {
    name: "Sara K.",
    handle: "@sarawanders",
    text: "Left my bags downtown, explored Abu Dhabi all day, picked them up before my flight. 10/10.",
    color: "bg-secondary text-navy",
  },
  {
    name: "Yousef M.",
    handle: "@ym_travels",
    text: "The live tracking is weirdly satisfying. Watched my suitcase make it to the gate before I did.",
    color: "bg-navy text-white",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-background px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-sm uppercase tracking-[0.2em] text-primary" style={{ fontWeight: 600 }}>
              Loved by travellers
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] text-navy" style={{ fontWeight: 800 }}>
              People can't stop talking about it.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-navy" style={{ fontWeight: 700 }}>
              4.9 / 5
            </span>
            <span className="text-muted-foreground">· 3,200+ reviews</span>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.handle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`flex h-full flex-col justify-between rounded-[1.75rem] p-6 ${r.color}`}
            >
              <blockquote className="text-[1.05rem] leading-snug" style={{ fontWeight: 500 }}>
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-black/10" style={{ fontWeight: 700 }}>
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block" style={{ fontWeight: 700 }}>
                    {r.name}
                  </span>
                  <span className="block text-sm opacity-70" style={{ fontFamily: "var(--font-mono)" }}>
                    {r.handle}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
