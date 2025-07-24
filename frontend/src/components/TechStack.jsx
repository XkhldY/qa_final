import React from "react";

const TECH = [
  "React",
  "Node.js",
  "Python",
  "AWS",
  "Kubernetes",
  "TypeScript",
  "Figma",
  "Next.js"
];

export default function TechStack() {
  return (
    <section id="techstack" className="fade-in-up py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Technologies We Cover</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {TECH.map((tech, i) => (
            <span key={i} className="bg-slate-100 px-4 py-2 rounded-lg font-medium text-indigo-700 shadow hover:shadow-md transition">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}