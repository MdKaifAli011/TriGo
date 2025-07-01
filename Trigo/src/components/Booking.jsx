import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Booking = () => {
  const { state: tour } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    persons: 1,
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      persons: formData.persons,
      date: formData.date,
      notes: formData.notes,
      tourTitle: tour?.title,
      tourPrice: tour?.price,
      country: tour?.country,
    };

    emailjs
      .send(
        "service_lw4z2fg",     // Replace with your service ID
        "template_u06rl9p",    // Replace with your template ID
        templateParams,
        "y18ZUp5PCghiw97Q9"      // Replace with your public key
      )
      .then(() => {
        toast.success("✅ Booking email sent successfully!");
        navigate("/success");
      })
      .catch((error) => {
        console.error("Booking error:", error);
        toast.error("❌ Failed to send booking email.");
      });
  };
const bookingTime = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="shadow-xl rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ✈️ Booking Tour: <span className="text-blue-500">{tour?.title}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={tour?.image}
              alt={tour?.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p><strong>Destination:</strong> {tour?.country}</p>
              <p><strong>Rating:</strong> ⭐ {tour?.rating}</p>
              <p><strong>Price:</strong> ₹{tour?.price} / person</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {["fullName", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block mb-1 text-gray-700 font-medium capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            ))}

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1 text-gray-700 font-medium">Persons</label>
                <input
                  type="number"
                  name="persons"
                  min="1"
                  value={formData.persons}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-gray-700 font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Additional Notes</label>
              <textarea
                name="notes"
                rows="3"
                onChange={handleChange}
                placeholder="Anything you'd like to add..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded shadow transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
