import React, { useState } from "react";

const faqs = [
  {
    q: "How are talents vetted?",
    a: "All talents undergo rigorous technical and soft skills screening including interviews, tests, and reference checks.",
  },
  {
    q: "How fast can I hire?",
    a: "You’ll receive curated matches within 48 hours and can onboard as soon as you’re ready.",
  },
  {
    q: "What roles can I hire?",
    a: "We cover developers, designers, product managers, QA, and more across all major tech stacks.",
  },
  {
    q: "Is there a risk-free trial?",
    a: "Yes, you can start with a risk-free trial to ensure a perfect fit.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section
      id="faq"
      className="fade-in-up max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-neutral-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={item.q}
            className="bg-white rounded-xl shadow transition"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              aria-expanded={openIdx === i}
              aria-controls={`faq-${i}`}
            >
              <span className="font-semibold text-neutral-900">{item.q}</span>
              <span className="ml-4 text-xl text-indigo-600">
                {openIdx === i ? "−" : "+"}
              </span>
            </button>
            {openIdx === i && (
              <div
                className="px-6 pb-4 text-neutral-700"
                id={`faq-${i}`}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}