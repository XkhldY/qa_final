import React from "react";

const STATS = [
  { label: "Developers Vetted", value: "20,000+" },
  { label: "Countries Represented", value: "60+" },
  { label: "Avg. Match Time", value: "48h" },
  { label: "Client Satisfaction", value: "97%" }
];

export default function Stats() {
  return (
    <section id="stats" className="fade-in-up bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map(({ label, value }, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-indigo-700">{value}</div>
              <div className="text-gray-600 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}