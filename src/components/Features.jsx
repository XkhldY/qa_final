import React from "react";

const features = [
  {
    title: "Save 60% on Costs",
    desc: "Access global talent at competitive rates without compromising quality.",
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 24 24"
        className="text-indigo-600"
      >
        <circle cx="12" cy="12" r="10" fill="#6366F1" opacity="0.1"/>
        <path d="M12 6v6l4 2" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Hire in 48 Hours",
    desc: "Get matched with pre-vetted experts ready to join your team fast.",
    icon: (
      <span className="text-2xl" role="img" aria-label="clock">⏱️</span>
    ),
  },
  {
    title: "Vetted Professionals",
    desc: "Work only with skilled, rigorously screened engineers and designers.",
    icon: (
      <span className="text-2xl" role="img" aria-label="check">✅</span>
    ),
  },
  {
    title: "Flexible Engagements",
    desc: "Scale up or down easily, from part-time to full-time contracts.",
    icon: (
      <span className="text-2xl" role="img" aria-label="arrows">🔄</span>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="fade-in-up max-w-7xl mx-auto px-6 py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-neutral-800">
        Why Remote Tech Bridge?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map(f => (
          <div
            key={f.title}
            className="rounded-xl shadow bg-white p-6 flex flex-col items-start"
          >
            <div className="mb-4">{f.icon}</div>
            <div className="font-semibold text-lg mb-1 text-neutral-900">{f.title}</div>
            <div className="text-neutral-600">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}