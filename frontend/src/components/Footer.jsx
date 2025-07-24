import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white text-center border-t text-gray-500">
      <span>&copy; {new Date().getFullYear()} Remote Talent Platform. All rights reserved.</span>
    </footer>
  );
}