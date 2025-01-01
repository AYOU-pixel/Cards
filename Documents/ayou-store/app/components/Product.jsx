import React from "react";
import Image from "next/image";
import { Card, CardContent, CardActions, Button } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <div className="flex justify-center p-4">
      <Card className="shadow-lg rounded-lg max-w-xs transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        {/* Product Image */}
        <div className="relative w-full bg-gray-200 rounded-t-lg overflow-hidden h-48">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="responsive"
            width={150}
            height={300}
            objectFit="cover"
            className="transform transition-all duration-500 hover:scale-110"
          />
        </div>

        {/* Product Details */}
        <CardContent className="bg-gray-800 text-gray-100 p-4">
          <h3 className="text-lg font-semibold truncate">{product.name}</h3>
          <p className="text-sm text-gray-400 mt-1 line-clamp-2">{product.description}</p>
          <p className="text-xl font-bold mt-3 text-gray-300">${product.price}</p>
        </CardContent>

        {/* Actions */}
        <CardActions className="bg-gray-900 flex justify-between px-4 py-2">
          <Button
            variant="contained"
            className="bg-gray-700 text-gray-100 transition-all duration-500 transform hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-lg"
            aria-label="Add to Cart"
          >
            <AiOutlineShoppingCart className="mr-2 text-3xl transition-all duration-500 transform hover:scale-110 hover:text-yellow-400" />
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            className="border-gray-700 text-gray-100 transition-all duration-500 transform hover:scale-105 hover:bg-green-700 hover:text-white hover:border-green-700 hover:shadow-lg"
            aria-label="View Product Details"
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;