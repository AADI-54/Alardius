// src/Components/ProductSection.jsx
import React from 'react';
import { ProductCard } from './ProductCard';
import { Maindata } from '../Data/Maindata';

export const ProductSection = ({ category, searchText = '' }) => {
  const normalizedSearch = searchText.toLowerCase().trim();

  const filteredProducts = Maindata.filter((product) => {
    const name = product?.name?.toLowerCase() || '';
    const description = product?.description?.toLowerCase() || '';
    const packing = product?.packing?.toLowerCase() || '';
    const inCategory = product.categories.includes(category);

    const matchesSearch = !normalizedSearch || (
      name.includes(normalizedSearch) ||
      description.includes(normalizedSearch) ||
      packing.includes(normalizedSearch)
    );

    return inCategory && matchesSearch;
  });

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No products found</p>
      )}
    </div>
  );
};
