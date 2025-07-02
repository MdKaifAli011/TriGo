import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currUser) => setUser(currUser));
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out");
      navigate("/");
    } catch {
      toast.error("Logout failed");
    }
  };

  const navLink = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-semibold underline"
          : "text-gray-800 hover:text-blue-600 font-medium"
      }
      onClick={() => setMenuOpen(false)} // Close menu on click
    >
      {label}
    </NavLink>
  );

  return (
   <nav className="bg-blue-100 py-4 px-6 shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          TripGo
        </NavLink>

        {/* Hamburger for small screens */}
        <button
          className="sm:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center space-x-6">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/tours", "Tours")}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col space-y-3 px-4">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/tours", "Tours")}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
