import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { ServiceSelector } from "../components/service-selector";
import { Partners } from "../components/partners";
import { HowItWorks } from "../components/how-it-works";
import { WhyMorafiq } from "../components/why-morafiq";
import { Testimonials } from "../components/testimonials";
import { AppDownload } from "../components/app-download";
import { Footer } from "../components/footer";

export function Landing() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <Navbar />
      <main>
        <Hero />
        <ServiceSelector />
        <Partners />
        <HowItWorks />
        <WhyMorafiq />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}
