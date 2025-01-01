"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 text-white shadow-lg rounded-2xl z-50 relative overflow-hidden`}
    >
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 opacity-50 rounded-2xl pointer-events-none" />

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Logo and Branding */}
        <div className="text-center md:text-left">
          <Image
            src="/log.png"
            alt="Company Logo"
            width={160}
            height={160}
            className="rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110"
            priority
          />
          <p className="text-sm mt-2 text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h4>
          <nav>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about-us"
                  className="hover:text-gray-300 transition-all hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/return-policy"
                  className="hover:text-gray-300 transition-all hover:underline"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-gray-300 transition-all hover:underline"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold text-gray-300 mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-400" />
              <span className="text-gray-400">+212 781-913306</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-400" />
              <span className="text-gray-400">ayoubpc938@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com" // Placeholder URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 transition-all transform hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com" // Placeholder URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 transition-all transform hover:scale-110"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com" // Placeholder URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 transition-all transform hover:scale-110"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Subtle Divider */}
      <div className="mt-6 border-t border-gray-600"></div>
    </footer>
  );
};

export default Footer;