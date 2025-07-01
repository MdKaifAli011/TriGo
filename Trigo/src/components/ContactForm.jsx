import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [email, setEmail] = useState(null);
  const [mobileNumber, setmobileNumber] = useState(null);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e3f2fd] px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-black">
        Welcome to <span className="text-blue-500">Contact Us</span>
      </h1>

      <div className="bg-white mt-6 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Contact Us
        </h2>

        <form onSubmit={handleContact} className="space-y-4">
          <div>
            <label className="block text-black font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-1">
              Mobile Number
            </label>
            <input
              type="Number"
              placeholder="Enter your Mobile Number"
              value={mobileNumber}
              onChange={(e) => setmobileNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-black font-semibold mb-1">
              Message
            </label>
            <input
              type="text"
              placeholder="Enter your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none shadow-sm"
              required
            />
          </div>

          <button
          onClick={()=>{navigate("/home")}}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

    
      </div>
    </div>
  );
};

export default ContactForm;
