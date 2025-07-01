import React from "react";

const ServiceCard = ({ title, description }) => (
  <div className="p-4 rounded shadow text-center transition-transform duration-300 hover:scale-105">
    <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">
        What we <span className="text-blue-500">Serve</span>
      </h2>
      <p className="text-sm text-gray-600 mb-6">We offer our best services</p>
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <ServiceCard title="Flight Booking" description="Book flights to your desired destination with ease." />
        <ServiceCard title="Hotel Booking" description="Find and book the best hotels." />
        <ServiceCard title="Adventure Tours" description="Embark on thrilling adventure tours." />
      </div>
    </section>
  );
};

export default ServicesSection;