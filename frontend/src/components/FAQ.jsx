import React from "react";

const FAQS = [
  {
    q: "How do you vet your talent?",
    a: "All candidates undergo rigorous technical interviews, portfolio reviews, and communication assessments before joining our pool."
  },
  {
    q: "What roles can I hire for?",
    a: "We provide developers, designers, product managers, QA engineers, and more."
  },
  {
    q: "How fast can I get started?",
    a: "You can typically start interviewing curated candidates within 48 hours of signing up."
  },
  {
    q: "Is there a trial period?",
    a: "Yes! We offer a risk-free trial with every engagement."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="fade-in-up py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="border-b pb-4">
              <h3 className="font-semibold text-lg">{q}</h3>
              <p className="text-gray-700">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}