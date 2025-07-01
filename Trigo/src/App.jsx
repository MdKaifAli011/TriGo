import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Booking from "./components/Booking";
import Login from "./pages/Login";
import SuccessPage from "./pages/SuccessPage"; // if you created one
import NotFound from "./pages/NotFound"; // optional

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/booking/:tourId" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;