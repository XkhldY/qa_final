import React from "react";

const stats = [
  { label: "Vetted Talents", value: "500+" },
  { label: "Countries", value: "50+" },
  { label: "Matching", value: "48hr" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="fade-in-up max-w-7xl mx-auto px-6 py-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map(s => (
          <div key={s.label} className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
              {s.value}
            </div>
            <div className="text-lg font-medium text-neutral-700">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}