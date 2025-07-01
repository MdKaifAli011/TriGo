import React from "react";

const StatCard = ({ number, label }) => (
  <div className=" p-6 rounded shadow text-center transition-transform duration-300 hover:scale-105">
    <p className="text-2xl font-bold text-blue-600 mb-2">{number}</p>
    <p className="text-sm text-gray-700">{label}</p>
  </div>
);

const ExperienceSection = () => (
  <section className="py-12 px-4">
    <h2 className="text-center text-xl font-bold mb-6">
      Experience our <span className="text-blue-500">TripGo</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      <StatCard number="12k+" label="Successful Trips" />
      <StatCard number="2k+" label="Regular Clients" />
      <StatCard number="10k+" label="Experience" />
    </div>
  </section>
);

export default ExperienceSection;