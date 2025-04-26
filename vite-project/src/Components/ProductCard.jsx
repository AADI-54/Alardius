import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:brightness-110 text-white w-full max-w-xs sm:max-w-sm mx-auto">
<div className="overflow-hidden rounded-2xl mb-3 sm:mb-4 border-2 border-white/30 group-hover:border-white transition-all duration-300">
  <img
    src={product.imageUrl}
    alt={product.name}
    className="w-full h-36 sm:h-44 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
  />
</div>


      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-lg sm:text-xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-emerald-400">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300">
          {product.description}
        </p>
        <p className="text-xs sm:text-sm text-gray-400 italic">
          Packing: {product.packing}
        </p>
      </div>
    </div>
  );
};
