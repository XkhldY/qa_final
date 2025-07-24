import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import useFadeInOnView from "./utils/useFadeInOnView";

const SECTIONS = [
  { id: "hero", Component: Hero },
  { id: "stats", Component: Stats },
  { id: "steps", Component: Steps },
  { id: "features", Component: Features },
  { id: "testimonials", Component: Testimonials },
  { id: "techstack", Component: TechStack },
  { id: "faq", Component: FAQ },
  { id: "cta", Component: CTA },
  { id: "footer", Component: Footer },
];

function App() {
  useFadeInOnView(); // Sets up the IntersectionObserver globally

  return (
    <div className="bg-slate-50 text-neutral-700">
      {SECTIONS.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </div>
  );
}

export default App;