"use client"
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show "Back to Top" button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 - Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">VLab</h2>
          <p className="mt-2 text-sm opacity-80">Crafted with ❤️ by Pickles. Your go-to virtual lab experience.</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-2xl hover:text-blue-300 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-blue-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-blue-300 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl hover:text-blue-300 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Column 2 - Useful Links */}
        <div>
          <h3 className="text-xl font-semibold">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Features</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Pricing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Legal */}
        <div>
          <h3 className="text-xl font-semibold">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Cookie Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-xl font-semibold">Subscribe to Newsletter</h3>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md bg-white text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="mt-2 w-full bg-blue-700 hover:bg-blue-800 transition text-white py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>

      {/* Contact Info */}
      <div className="mt-8 text-center text-sm">
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-8 items-center opacity-90">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" /> 123 Lab Street, Science City, IN
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2" /> support@vlab.com
          </p>
          <p className="flex items-center">
            <FaPhone className="mr-2" /> +91 9876543210
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-xs opacity-80">
        &copy; {new Date().getFullYear()} VLab | All Rights Reserved
      </div>

      {/* Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
