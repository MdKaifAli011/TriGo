import React, { useState } from "react";
import { toast } from "react-toastify";

const SubscribeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email.includes("@")) {
      toast.warn("Please enter valid name and email");
      return;
    }

    toast.success("Subscription successful!");
    e.target.submit();
  };

  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-xl font-bold mb-2">
        Subscribe Now for <span className="text-blue-500">Notifications!</span>
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Stay one step ahead with our exclusive travel alerts!
      </p>

      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/hellomdkaifali@gmail.com"
        method="POST"
        className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-xl mx-auto"
      >
        {/* 👤 Name Input */}
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full sm:w-auto"
        />

        {/* 📩 Email Input */}
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full sm:w-auto"
        />

        {/* ✉️ Hidden Inputs to Format Mail */}
        <input type="hidden" name="_subject" value={`New Subscriber: ${formData.name}`} />
        <input type="hidden" name="_template" value="table" />

        {/* ✅ Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubscribeSection;
