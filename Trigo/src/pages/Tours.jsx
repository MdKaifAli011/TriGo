import React from "react";
import TourCard from "../components/TourCard";

const tours = [
  {
    title: "Westminster Bridge",
    country: "London",
    price: 10000,
    rating: 4.5,
    image: "https://loremflickr.com/400/300/london",
  },
  {
    title: "Bali, Indonesia",
    country: "Indonesia",
    price: 10000,
    rating: 4.6,
    image: "https://loremflickr.com/400/300/bali,beach",
  },
  {
    title: "Snowy Mountains",
    country: "Thailand",
    price: 10000,
    rating: 4.7,
    image: "https://loremflickr.com/400/300/mountains,snow",
  },
];

const Tours = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
