import React from "react";
import HeroSection from "../components/HeroSection";
import SearchFilters from "../components/SearchFilters";
import ServicesSection from "../components/ServicesSection";
import FeaturedTours from "../components/FeaturedTours";
import ExperienceSection from "../components/ExperienceSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#e3f2fd] text-gray-800">
      <HeroSection />
      <SearchFilters />
      <ServicesSection />
      <FeaturedTours />
      <ExperienceSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;
