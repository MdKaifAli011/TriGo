import React from "react";
import TourList from "../components/TourList";

const AllTours = () => {
  return (
    <div className="pt-20 bg-blue-50 min-h-screen">
      <div className="relative h-64">
        <img
          src="https://loremflickr.com/1280/400/maldives,beach,resort"
          className="w-full h-full object-cover"
          alt="Banner"
        />
        <h1 className="absolute bottom-6 left-6 text-white text-3xl sm:text-4xl font-bold drop-shadow-md">
          All Tours
        </h1>
      </div>
      <TourList />
    </div>
  );
};

export default AllTours;
