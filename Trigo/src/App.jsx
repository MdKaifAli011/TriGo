import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Tours from "./pages/Tours";

import Booking from "./components/Booking";
import ContactForm from "./pages/ContactForm";
import Success from "./components/Success";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/booking/:tourId" element={<Booking />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;



//Practices branches test