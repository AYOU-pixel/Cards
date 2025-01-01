// components/Categories.js
import React from "react";
import { Button } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Home & Garden" },
  { id: 4, name: "Sports" },
  { id: 5, name: "Health & Beauty" },
  { id: 6, name: "Toys & Games" },
  { id: 7, name: "Books & Stationery" },
  { id: 8, name: "Automotive" },
  { id: 9, name: "Music" },
  { id: 10, name: "Groceries" },
  { id: 11, name: "Pets" },
  { id: 12, name: "Art & Craft" },
  { id: 13, name: "Food & Beverages" },
  { id: 14, name: "Jewelry" },
  { id: 15, name: "Travel" },
  { id: 16, name: "Education" },
  { id: 17, name: "Gifts & Occasions" },
  { id: 18, name: "Collectibles" },
  { id: 19, name: "Real Estate" },
];

const Categories = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-12 tracking-wide">
          Shop by Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              aria-label={`Explore ${category.name}`}
            >
              {/* Category Name */}
              <h3 className="text-lg font-semibold text-gray-100 text-center mb-4">
                {category.name}
              </h3>

              {/* Image Placeholder */}
              <div
                className="h-32 bg-gradient-to-t from-gray-600 to-transparent rounded-lg flex items-center justify-center"
                aria-label={`Image placeholder for ${category.name}`}
              >
                <span className="text-gray-300 text-sm">Image Placeholder</span>
              </div>

              {/* Action Button */}
              <div className="mt-4 flex justify-center">
                <Button
                  variant="contained"
                  size="small"
                  className="!bg-indigo-600 !text-white !capitalize flex items-center hover:!bg-indigo-500 hover:shadow-lg"
                  aria-label={`View more about ${category.name}`}
                >
                  View More
                  <AiOutlineArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;



