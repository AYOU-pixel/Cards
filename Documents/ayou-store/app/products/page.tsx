// components/Products.js
import React from "react";
import { Button } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";

const products = [
  { id: 1, name: "Smartphone", price: "$499", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291_960_720.jpg" },
  { id: 2, name: "Laptop", price: "$999", imageUrl: "https://cdn.pixabay.com/photo/2021/03/02/13/04/laptop-6062423_960_720.jpg" },
  { id: 3, name: "Headphones", price: "$199", imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/00/18/people-2562222_960_720.jpg" },
  { id: 4, name: "Smartwatch", price: "$299", imageUrl: "https://cdn.pixabay.com/photo/2020/10/19/09/07/apple-watch-5667205_960_720.jpg" },
  { id: 5, name: "Camera", price: "$599", imageUrl: "https://cdn.pixabay.com/photo/2022/05/27/09/15/gimbal-stabilizer-7224727_960_720.jpg" },
  { id: 6, name: "Gaming Console", price: "$399", imageUrl: "https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191_1280.jpg" },
  { id: 7, name: "Tablet", price: "$449", imageUrl: "https://cdn.pixabay.com/photo/2017/02/26/04/02/woman-2099466_960_720.jpg" },
  { id: 8, name: "Wireless Speaker", price: "$149", imageUrl: "https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg" },
  { id: 9, name: "Keyboard", price: "$99", imageUrl: "https://cdn.pixabay.com/photo/2019/01/04/11/51/keyboard-3913007_960_720.jpg" },
  { id: 10, name: "Mouse", price: "$59", imageUrl: "https://manhattanproducts.eu/cdn/shop/products/rgb-led-wired-optical-usb-gaming-mouse-190220-1_7fa306a3-c680-4c69-af4a-ae0ba272166c.jpg?v=1678748183" },
  { id: 11, name: "Monitor", price: "$199", imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg" },
  { id: 12, name: "Printer", price: "$299", imageUrl: "https://cdn.pixabay.com/photo/2020/05/14/02/07/office-5169618_960_720.jpg" },
];

const Products = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-12 tracking-wide">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-700 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              aria-label={`View details of ${product.name}`}
            >
              {/* Product Image */}
              <img
                src={product.imageUrl}
                alt={`${product.name} image`}
                className="w-full h-48 object-cover"
              />

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.price}</p>

                {/* Buy Now Button */}
                <div className="flex justify-center">
                  <Button
                    variant="contained"
                    size="medium"
                    className="!bg-indigo-600 !text-white hover:!bg-indigo-500 flex items-center capitalize"
                    aria-label={`Buy ${product.name}`}
                  >
                    Buy Now
                    <AiOutlineShoppingCart className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
