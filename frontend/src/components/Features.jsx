import React from "react";

const FEATURES = [
  {
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Vetted Talent",
    desc: "Only the top 2% of applicants pass our multi-stage vetting process."
  },
  {
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Flexible Engagements",
    desc: "Scale up or down easily—hire full-time, part-time, or on demand."
  },
  {
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="5" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7l10 6 10-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Risk-Free Trial",
    desc: "Try before you commit. Pay nothing if you're not satisfied in the first 2 weeks."
  }
];

export default function Features() {
  return (
    <section id="features" className="fade-in-up py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-8 flex flex-col items-center text-center shadow hover:shadow-lg transition">
              <span>{icon}</span>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}