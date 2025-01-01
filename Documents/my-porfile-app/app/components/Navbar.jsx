"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 sm:px-12 lg:px-24">
        {/* Logo/Brand Name */}
        <img
          src="logo.png"
          className="w-16 h-16 rounded-full transform transition-transform duration-700 hover:scale-110 hover:rotate-6 hover:shadow-lg"
          alt="Logo"
        />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/About"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300 font-semibold"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300 font-semibold"
          >
            Projects
          </Link>
          <Link
            href="/Contact"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300 font-semibold"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
            aria-label="menu"
            edge="start"
            className="text-white"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        className="md:hidden"
        transitionDuration={250}
        PaperProps={{
          sx: {
            backgroundColor: '#1a202c', // Match the navbar's background color
            color: 'white',
            borderRadius: '8px',
            padding: '10px',
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link
            href="/About"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link
            href="#projects"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            Projects
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link
            href="/Contact"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </nav>
  );
}