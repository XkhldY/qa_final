import React from "react";

const STEPS = [
  {
    step: 1,
    title: "Share Your Needs",
    desc: "Tell us about your project, required skills, and ideal team structure."
  },
  {
    step: 2,
    title: "Meet Candidates",
    desc: "Interview handpicked talent matched to your requirements within 48 hours."
  },
  {
    step: 3,
    title: "Start Working",
    desc: "Onboard your chosen experts and get started, risk-free."
  }
];

export default function Steps() {
  return (
    <section id="steps" className="fade-in-up bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {STEPS.map(({ step, title, desc }) => (
            <div key={step} className="flex-1 bg-white rounded-xl p-8 shadow text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto text-2xl font-bold mb-4">{step}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}