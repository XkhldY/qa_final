import React from "react";

const TESTIMONIALS = [
  {
    author: "Jane Doe, CTO at Acme Inc.",
    text: "We hired 3 senior engineers in under a week. The process was seamless and the quality is unmatched."
  },
  {
    author: "Alex Smith, Founder of BetaTech",
    text: "Our project shipped 2 months early thanks to their incredible talent pool."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="fade-in-up py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say</h2>
        <div className="space-y-8">
          {TESTIMONIALS.map(({ author, text }, i) => (
            <div key={i} className="bg-indigo-50 rounded-xl p-8 text-indigo-900 shadow">
              <p className="text-lg mb-4">“{text}”</p>
              <div className="text-right font-semibold">{author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}