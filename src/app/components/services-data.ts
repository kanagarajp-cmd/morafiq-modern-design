import { Home, Briefcase, Building2, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  price: string;
  priceNote: string;
  duration: string;
  popular?: boolean;
  description: string;
  includes: string[];
  steps: { label: string; detail: string }[];
  image: string;
};

export const services: Service[] = [
  {
    id: "home",
    name: "Home Check-in",
    tagline: "We come to you",
    icon: Home,
    price: "AED 79",
    priceNote: "per bag",
    duration: "Pickup in ~60 min",
    popular: true,
    description:
      "Sleep in. We collect your bags from your door, check them in, and send them straight to your flight. You show up to the airport hands-free.",
    includes: [
      "Doorstep pickup across Abu Dhabi",
      "Verified, security-sealed handling",
      "Live tracking from door to gate",
      "Boarding pass dropped to your phone",
    ],
    steps: [
      { label: "Book a slot", detail: "Pick a pickup window in the app." },
      { label: "We collect", detail: "A vetted rider grabs your bags." },
      { label: "Travel light", detail: "Walk into the airport empty-handed." },
    ],
    image:
      "https://images.unsplash.com/photo-1565620731358-e8c038abf86b?w=1200&h=900&fit=crop&auto=format",
  },
  {
    id: "leave",
    name: "Leave & Lave",
    tagline: "Drop, store, relax",
    icon: Briefcase,
    price: "AED 39",
    priceNote: "per day",
    duration: "Open 24/7",
    description:
      "Got hours to kill before your flight? Drop your bags at a Morafiq point, explore the city luggage-free, and grab them whenever you're ready.",
    includes: [
      "Secure, climate-controlled storage",
      "Flexible by-the-hour or daily rates",
      "Insured up to AED 5,000 per bag",
      "Grab-and-go QR pickup",
    ],
    steps: [
      { label: "Drop off", detail: "Leave bags at any Morafiq point." },
      { label: "Roam free", detail: "Explore the city hands-free." },
      { label: "Pick up", detail: "Scan your QR and you're set." },
    ],
    image:
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=1200&h=900&fit=crop&auto=format",
  },
  {
    id: "city",
    name: "City Check-in",
    tagline: "Beat the queues",
    icon: Building2,
    price: "AED 59",
    priceNote: "per bag",
    duration: "Same-day to airport",
    description:
      "Check in downtown. Hand your bags over at a city counter, get your boarding pass on the spot, and skip the airport check-in lines entirely.",
    includes: [
      "Downtown check-in counters",
      "Instant boarding pass + seat selection",
      "Skip airport baggage queues",
      "Airline-partnered handling",
    ],
    steps: [
      { label: "Visit a counter", detail: "Pop into a city check-in point." },
      { label: "Check in", detail: "Bags tagged, boarding pass issued." },
      { label: "Head to gate", detail: "Breeze past the airport queues." },
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=900&fit=crop&auto=format",
  },
];
