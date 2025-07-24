import React from "react";

const techs = [
  "React", "Node.js", "Python", "TypeScript", "Go", "Ruby", "AWS", "Docker", "Kubernetes", "Figma",
];
const roles = [
  "Frontend", "Backend", "Fullstack", "Mobile", "DevOps", "Data", "UI/UX", "QA", "Product"
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="fade-in-up max-w-7xl mx-auto px-6 py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-neutral-800">
        Tech Stack &amp; Roles
      </h2>
      {/* Tech grid */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {techs.map(tech => (
          <span
            key={tech}
            className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium text-sm shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Roles list */}
      <div className="flex flex-wrap justify-center items-center gap-2 text-neutral-700 text-base">
        {roles.map((role, i) => (
          <React.Fragment key={role}>
            <span>{role}</span>
            {i < roles.length - 1 && (
              <span
                className="mx-2 text-neutral-300 select-none"
                aria-hidden="true"
              >
                &bull;
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}