import React from "react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="fade-in-up w-full bg-indigo-700 text-white py-16"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to scale your team?</h2>
        <p className="text-lg mb-8">
          Discover world-class talent and accelerate your product roadmap today.
        </p>
        <a
          href="#"
          className="px-8 py-4 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}