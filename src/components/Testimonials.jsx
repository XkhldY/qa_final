import React from "react";

const testimonials = [
  {
    company: "Acme Corp",
    initials: "AC",
    quote: "Remote Tech Bridge helped us scale engineering quickly without sacrificing quality.",
    author: "Jane Smith, CTO",
  },
  {
    company: "Globex",
    initials: "GX",
    quote: "We found top-tier developers in days, not weeks. Seamless process.",
    author: "Mark Lee, Founder",
  },
  {
    company: "Startly",
    initials: "ST",
    quote: "The talent vetting is unmatched. We onboarded a world-class team remotely.",
    author: "Sara Kim, Head of Product",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="fade-in-up max-w-7xl mx-auto px-6 py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-neutral-800">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(t => (
          <div
            key={t.company}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-start"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-xl text-indigo-700 mr-3">
                {t.initials}
              </div>
              <div className="font-semibold text-neutral-900">{t.company}</div>
            </div>
            <div className="italic text-neutral-700 mb-4">&ldquo;{t.quote}&rdquo;</div>
            <div className="text-sm text-neutral-500">{t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}