import React from "react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="fade-in-up w-full bg-indigo-600 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Scale Your Team?
        </h2>
        <p className="mb-8 text-lg">
          Connect with our global network of vetted professionals and build your dream team.
        </p>
        <button className="px-8 py-4 rounded-lg font-semibold bg-white text-indigo-700 hover:bg-indigo-50 transition focus:outline-none focus:ring-2 focus:ring-white text-lg shadow">
          Get Started Now
        </button>
      </div>
    </section>
  );
}