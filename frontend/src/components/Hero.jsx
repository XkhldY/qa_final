import React from "react";

const BUTTON_CLASS =
  "px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-400";
const OUTLINE_BUTTON_CLASS =
  "px-6 py-3 rounded-lg font-semibold border-2 border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ml-3";

export default function Hero() {
  return (
    <section
      id="hero"
      className="fade-in-up w-full bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Hire World-Class Remote Tech Talent
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium max-w-2xl">
          Scale your startup fast with vetted developers, designers &amp; engineers from around the globe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className={BUTTON_CLASS}>Get Started</button>
          <button className={OUTLINE_BUTTON_CLASS}>Book a Call</button>
        </div>
      </div>
    </section>
  );
}