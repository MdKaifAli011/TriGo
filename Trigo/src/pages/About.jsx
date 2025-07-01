import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-blue-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?t=st=1734459512~exp=1734463112~hmac=956199774261d513cea7b1861f7343dcc4bcdc9298fbcf1c82e3028ab2da7f18&w=1800)" }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Welcome to <span className="text-blue-300">TripGo</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base">Your Trusted Travel Agency for Seamless Booking Experiences</p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">
          About <span className="text-blue-500">TripGo</span>
        </h2>
        <p className="text-sm text-gray-700 max-w-2xl mx-auto">
          TripGo is a leading travel agency offering personalized booking experiences to help travelers plan their perfect vacation. 
          With a wide range of tours, activities, and accommodations, we make your travel dreams come true.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-blue-100 px-4 md:px-8 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Our <span className="text-blue-500">Mission</span>
        </h2>
        <p className="text-sm text-gray-700 max-w-2xl mx-auto">
          To provide seamless, reliable, and hassle-free travel booking services that empower our customers to explore 
          the world with ease and confidence.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Choose <span className="text-blue-500">Us?</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Professional Service", image: "https://loremflickr.com/400/300/business", desc: "We offer expert assistance and personalized guidance." },
            { title: "Unique Destinations", image: "https://loremflickr.com/400/300/islands", desc: "We curate exclusive travel packages to unique places." },
            { title: "Affordable Prices", image: "https://loremflickr.com/400/300/money", desc: "We ensure the best value for your money with competitive rates." },
          ].map((item, i) => (
            <div key={i} className="bg-blue-100  shadow-md rounded-lg overflow-hidden transition hover:shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-blue-100 py-12 px-4 md:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Meet Our <span className="text-blue-500">Team</span></h2>
        <p className="text-sm text-gray-700 max-w-2xl mx-auto mb-8">
          Our team is dedicated to making your travel experiences unforgettable.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: "Jane Doe", role: "Travel Consultant", image: "https://picsum.photos/seed/picsum/200/300" },
            { name: "John Smith", role: "Travel Specialist", image: "https://picsum.photos/seed/picsum/200/300" },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <img src={member.image} alt={member.name} className="w-40 h-40 object-cover rounded-full mx-auto mb-2" />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in <span className="text-blue-500">Touch</span></h2>
        <p className="text-sm text-gray-600 mb-6">Have questions or need help? We’re here to assist you.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm text-left">
          <div>
            <p className="font-semibold">Email</p>
            <p>contact@tripgo.com</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>+91-9130045670</p>
          </div>
          <div>
            <p className="font-semibold">Address</p>
            <p>Ghaziabad, India</p>
          </div>
        </div>
        <button  onClick={() => navigate("/contact")} className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default About;
