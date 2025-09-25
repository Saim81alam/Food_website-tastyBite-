import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useUser } from "../../context/UserContext";
import Buttonss from "./Buttonss";
import ProfileSidebar from "./ProfileSidebar";
import CartIcon from "./CartIcon";
import MobileMenu from "./MobileMenu";
import menuData from "../../JSON/smallFood.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const user = useUser();
  const firstLetter = user?.displayName?.charAt(0)?.toUpperCase() || "L";

  const cartCount = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/auth");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-2">
          <img
            src="../LOGO.png"
            alt="Logo"
            className="w-12 h-12 object-cover mr-2"
          />
          <Link
            to="/"
            className="text-2xl font-bold text-black-600 tracking-tight"
          >
            TastyBite
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-9 items-center">
          <Link to="/">
            <Buttonss variant="navIcon">Home</Buttonss>
          </Link>

          <Link to="/menu">
            <Buttonss variant="navIcon">Menu</Buttonss>
          </Link>

          <Link to="/about">
            <Buttonss variant="navIcon">About</Buttonss>
          </Link>
          <Link to="/contact">
            <Buttonss variant="navIcon">Contact</Buttonss>
          </Link>
          <Link
            to="/reviews"
            className="text-gray-600 hover:text-black font-medium transition hover:scale-110"
          >
            Reviews
          </Link>

          {/* Cart Icon */}
          <CartIcon cartCount={cartCount} />

          {/* Profile  Button */}
          {!isProfileOpen && (
            <div className="flex space-x-2" onClick={toggleProfile}>
              <Buttonss variant="circle">{firstLetter}</Buttonss>
            </div>
          )}
        </div>

        {/* Mobile sidebar open/close Buttons */}
        <div className="lg:hidden flex items-center space-x-5">
          <CartIcon cartCount={cartCount} />
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Profile Sidebar */}
      {isProfileOpen && (
        <ProfileSidebar
          user={user}
          firstLetter={firstLetter}
          handleLogout={handleLogout}
          toggleProfile={toggleProfile}
        />
      )}

      {/* Mobile side bar */}
      {isOpen && (
        <MobileMenu
          toggleMenu={toggleMenu}
          toggleProfile={toggleProfile}
          handleLogout={handleLogout}
        />
      )}
    </nav>
  );
};

export default Navbar;
