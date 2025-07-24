import { useEffect } from "react";

// This hook adds 'visible' class to elements with 'fade-in-up' when in viewport.
export default function useFadeInOnView() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll(".fade-in-up");
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.13 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}