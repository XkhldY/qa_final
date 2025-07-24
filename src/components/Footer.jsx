import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="fade-in-up w-full border-t border-neutral-200 bg-white py-6 text-neutral-500"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="font-bold text-indigo-600 text-lg mb-2 sm:mb-0">
          Remote Tech Bridge
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-indigo-600 transition">About</a>
          <a href="#" className="hover:text-indigo-600 transition">How it Works</a>
          <a href="#" className="hover:text-indigo-600 transition">Contact</a>
        </div>
        <div className="text-xs mt-2 sm:mt-0">&copy; {new Date().getFullYear()} Remote Tech Bridge</div>
      </div>
    </footer>
  );
}