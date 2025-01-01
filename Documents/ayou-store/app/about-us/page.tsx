import React from "react";
import { Button, IconButton } from "@mui/material";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-20">
      {/* About Us Section */}
      <div className="p-10 bg-gray-100 shadow-2xl rounded-3xl max-w-4xl mx-auto mt-12 transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Welcome to our e-commerce store! We are committed to offering high-quality products at competitive prices. Our mission is to create a seamless shopping experience for every customer.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          With a diverse product range and a dedicated team passionate about exceptional customer service, we aim to be your go-to choice for online shopping. Let us make your shopping journey simple, efficient, and enjoyable.
        </p>
        <div className="text-center mt-8">
          <Button
            variant="contained"
            color="primary"
            className="bg-indigo-600 hover:bg-indigo-700 capitalize px-8 py-2 transition duration-200"
          >
            Learn More About Us
          </Button>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500 text-white py-16 mt-16 rounded-t-xl">
        <div className="container mx-auto text-center space-y-10">
          {/* Social Media Section */}
          <div>
            <p className="text-2xl font-semibold mb-4">Follow Us</p>
            <div className="flex justify-center space-x-6 text-3xl">
              <IconButton
                color="inherit"
                aria-label="Facebook"
                role="button"
                className="hover:text-gray-300 transform hover:rotate-12 transition-transform duration-300"
              >
                <FaFacebookF />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                role="button"
                className="hover:text-gray-300 transform hover:rotate-12 transition-transform duration-300"
              >
                <FaTwitter />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                role="button"
                className="hover:text-gray-300 transform hover:rotate-12 transition-transform duration-300"
              >
                <FaInstagram />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                role="button"
                className="hover:text-gray-300 transform hover:rotate-12 transition-transform duration-300"
              >
                <FaLinkedinIn />
              </IconButton>
            </div>
          </div>

          {/* Contact & Info Section */}
          <div className="text-base">
            <p>Have Questions? Contact us:</p>
            <p>Email: <a href="mailto:ayoubpc938@gmail.com" className="underline">ayoubpc938@gmail.com</a></p>
            <p>Phone: <a href="tel:+212781913306" className="underline">+212 781-913306</a></p>
          </div>

          {/* Copyright Section */}
          <div className="mt-6">
            <p className="text-sm">&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
