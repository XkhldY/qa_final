import React from "react";

const steps = [
  {
    title: "Tell Us Your Needs",
    desc: "Share your ideal candidate profile and project goals.",
    icon: "📝",
  },
  {
    title: "Get Matched Fast",
    desc: "We curate the top talents for your review within 48 hours.",
    icon: "🤝",
  },
  {
    title: "Start Collaborating",
    desc: "Interview and onboard your chosen expert with ease.",
    icon: "🚀",
  },
  {
    title: "Scale Confidently",
    desc: "Grow your team as your business evolves.",
    icon: "🌍",
  },
];

export default function Steps() {
  return (
    <section
      id="steps"
      className="fade-in-up max-w-7xl mx-auto px-6 py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-neutral-800">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="flex flex-col items-center md:w-1/4"
          >
            <div className="mb-4 w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full font-bold text-2xl shadow">
              {step.icon}
            </div>
            <div className="text-lg font-semibold mb-2 text-neutral-900">
              {`${i + 1}. ${step.title}`}
            </div>
            <div className="text-neutral-600 text-base text-center">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}