import React from "react";
import { Link } from "react-router-dom";

const Success = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-green-600 mb-2">🎉 Booking Successful!</h1>
    <p className="text-gray-700 mb-4">Thank you for booking with <strong>TripGo</strong>. A confirmation email has been sent to you.</p>
    <Link
      to="/"
      className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
    >
      Back to Home
    </Link>
  </div>
);

export default Success;
