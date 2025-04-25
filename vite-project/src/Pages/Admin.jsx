import React, { useState } from 'react';
import axios from 'axios';

const Admin = ({ refreshData }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    packing: '',
    imageUrl: '',
    categories: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'tablets', 'capsules', 'syrups', 'injections',
    'soft-gel-capsules', 'dry-syrup', 'ointment', 'oil',
    'powder', 'herbal-products', 'paediatric-range',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((category) => category !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/products', product);
      console.log('Product added:', response.data);
      alert('Product added successfully');

      setProduct({
        id: '',
        name: '',
        description: '',
        packing: '',
        imageUrl: '',
        categories: [],
      });

      refreshData(); // Refresh product list
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel - Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ID */}
        <div>
          <label className="text-lg" htmlFor="id">Product ID</label>
          <input
            type="number"
            id="id"
            name="id"
            value={product.id}
            onChange={handleInputChange}
            className="w-full bg-gray-800 text-white p-3 mt-1 rounded-md"
            required
          />
        </div>

        {/* Name */}
        <div>
          <label className="text-lg" htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="w-full bg-gray-800 text-white p-3 mt-1 rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-lg" htmlFor="description">Product Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="w-full bg-gray-800 text-white p-3 mt-1 rounded-md"
            required
          />
        </div>

        {/* Packing */}
        <div>
          <label className="text-lg" htmlFor="packing">Product Packing</label>
          <input
            type="text"
            id="packing"
            name="packing"
            value={product.packing}
            onChange={handleInputChange}
            className="w-full bg-gray-800 text-white p-3 mt-1 rounded-md"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="text-lg" htmlFor="imageUrl">Product Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleInputChange}
            className="w-full bg-gray-800 text-white p-3 mt-1 rounded-md"
            required
          />
        </div>

        {/* Categories */}
        <div>
          <label className="text-lg mb-2 block">Product Categories</label>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={category}
                  checked={product.categories.includes(category)}
                  onChange={handleCategoryChange}
                  className="form-checkbox h-4 w-4 text-emerald-500"
                />
                <span className="capitalize">{category.replace(/-/g, ' ')}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-500 text-white py-3 rounded-md text-xl hover:bg-emerald-600 transition-all disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default Admin;
