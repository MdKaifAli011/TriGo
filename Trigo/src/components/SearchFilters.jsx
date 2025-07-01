import React from "react";

const Card = ({ title, description }) => (
  <div className=" p-4 shadow rounded-lg mb-4 transition-all duration-300 ease-in-out hover:scale-105">
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const SearchFilters = () => {
  return (
    <section className="max-w-2xl mx-auto px-4">
      <Card title="Location" description="Where are you going?" />
      <Card title="Distance" description="Choose the perfect distance." />
      <Card title="Max People" description="Choose number of people." />
    </section>
  );
};

export default SearchFilters;
