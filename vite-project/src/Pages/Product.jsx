import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductSection } from '../Components/ProductSection';
import { FiSearch } from 'react-icons/fi';

// Full product list
import { Maindata } from './../Data/Maindata';

export const Product = () => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const categories = [
    'tablets',
    'capsules',
    'syrups',
    'injections',
    'soft-gel-capsules',
    'dry-syrup',
    'ointment',
    'oil',
    'powder',
    'herbal-products',
    'paediatric-range',
  ];

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
    if (showSearch) setSearchText('');
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const normalizedSearch = searchText.toLowerCase().trim();

  // Show only relevant categories based on searchText
  const filteredCategories = categories.filter((category) => {
    if (!normalizedSearch) return true;

    return Maindata.some((product) => {
      const name = product?.name?.toLowerCase() || '';
      const description = product?.description?.toLowerCase() || '';
      const packing = product?.packing?.toLowerCase() || '';

      return (
        product.categories.includes(category) &&
        (name.includes(normalizedSearch) ||
          description.includes(normalizedSearch) ||
          packing.includes(normalizedSearch))
      );
    });
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold border-b border-gray-700 pb-2">
            Our Products
          </h1>
          <button
            onClick={handleSearchToggle}
            className="text-white hover:text-emerald-400 transition-colors text-2xl"
          >
            <FiSearch />
          </button>
        </div>

        {showSearch && (
          <input
            type="text"
            placeholder="Search by product name, description or packing..."
            className="w-full mb-8 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={searchText}
            onChange={handleSearchChange}
          />
        )}

        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category} id={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                {category.replace('-', ' ').toUpperCase()}
              </h2>
              <ProductSection category={category} searchText={searchText} />
            </div>
          ))
        ) : (
          <p className="text-gray-400">No products found</p>
        )}
      </div>
    </div>
  );
};