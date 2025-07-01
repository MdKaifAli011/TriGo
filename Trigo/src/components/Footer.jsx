import React from "react";

const Footer = () => (
  <footer className="bg-blue-100 text-sm py-6 px-4 text-center">
    <p className="text-gray-600">
      © 2024 <span className="font-bold">TripGo</span>. All Rights Reserved.
    </p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="#" className="text-gray-600 hover:text-blue-600 transition">FB</a>
      <a href="#" className="text-gray-600 hover:text-blue-600 transition">TW</a>
      <a href="#" className="text-gray-600 hover:text-blue-600 transition">IG</a>
    </div>
  </footer>
);

export default Footer;
