import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Awards } from "./components/sections/Awards";
import { CareerJourney } from "./components/sections/CareerJourney";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { EngineeringApproach } from "./components/sections/EngineeringApproach";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { TechnicalExpertise } from "./components/sections/TechnicalExpertise";
import { Testimonials } from "./components/sections/Testimonials";
import { sectionToNav } from "./data/profile";
import { useActiveSection } from "./hooks/useActiveSection";

import { Marquee } from "./components/ui/Marquee";

const sectionIds = Object.keys(sectionToNav);
const marqueeTop = ["ServiceNow", "CMDB", "CSDM", "ITOM", "ITAM", "IntegrationHub", "Event Management"];
const marqueeBottom = ["Design", "Develop", "Integrate", "Automate", "Validate", "Deliver"];

export default function App() {
  const activeSection = useActiveSection(sectionIds);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar activeId={sectionToNav[activeSection] ?? "home"} />
      <main id="main">
        <Hero />
        <Marquee items={marqueeTop} />
        <About />
        <CareerJourney />
        <TechnicalExpertise />
        <Experience />
        <Projects />
        <EngineeringApproach />
        <Certifications />
        <Awards />
        <Education />
        <Testimonials />
        <Marquee items={marqueeBottom} reverse tone="sun" />
        <Contact />
      </main>
      <Footer />
      <a
        href="#home"
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        className={`fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-line bg-surface/90 text-fg backdrop-blur transition-all duration-300 hover:border-brand/60 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </a>
    </>
  );
}

