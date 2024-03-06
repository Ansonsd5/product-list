'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ProductDetail = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-lg relative border-2 border-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-2 right-2"
        onClick={toggleLike}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className={`text-${isLiked ? 'red' : 'gray'}-500 cursor-pointer`}
        />
      </motion.div>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">{product.title}</h2>
      <div className="flex justify-center mb-4">
        <img className="h-64 w-auto object-contain" src={product.image} alt={product.title} />
      </div>
      <p className="text-xl font-semibold text-gray-900 mb-2">${product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-gray-700 mb-4">Brand: {product.brand}</p>
      {product.isNew && <span className="bg-green-500 text-white text-xs font-semibold rounded-full py-1 px-2 uppercase">New Arrival</span>}
      <div className="mt-6 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
