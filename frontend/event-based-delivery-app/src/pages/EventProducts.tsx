import React, { useState } from 'react';
import Select from 'react-select';
import { FaFilter } from 'react-icons/fa';
// Header, Footer, SideNav removed
import type { Product, SortOption } from '../types';
import './EventProducts.css';

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Gold Balloon Arch Kit", actual_price: 1500, discounted_price: 1200, image_url: "https://via.placeholder.com/300", category: "Decor" },
  { id: 2, name: "LED String Lights (20m)", actual_price: 800, image_url: "https://via.placeholder.com/300", category: "Lighting" },
  { id: 3, name: "Confetti Canon Poppers", actual_price: 500, discounted_price: 450, image_url: "https://via.placeholder.com/300", category: "Accessories" },
  { id: 4, name: "Birthday Banner", actual_price: 300, image_url: "https://via.placeholder.com/300", category: "Decor" },
  { id: 5, name: "Party Hats (Pack of 10)", actual_price: 250, discounted_price: 200, image_url: "https://via.placeholder.com/300", category: "Accessories" },
];

const sortOptions: SortOption[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'best-selling', label: 'Best selling' },
  { value: 'alphabetical-az', label: 'Alphabetically, A-Z' },
  { value: 'alphabetical-za', label: 'Alphabetically, Z-A' },
  { value: 'price-low-high', label: 'Price, low to high' },
  { value: 'price-high-low', label: 'Price, high to low' },
  { value: 'date-old-new', label: 'Date, old to new' },
  { value: 'date-new-old', label: 'Date, new to old' },
];

const EventProducts: React.FC = () => {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  
  return (
    // Note: No layout wrapper here, App.tsx handles it
    <div className="products-container">
      {/* Products Header Bar */}
      <div className="products-header-bar">
        <div className="products-info">
          <h1>Birthday Bash Products</h1>
          <p className="text-secondary">{products.length} products found</p>
        </div>

        <div className="products-controls">
          <button className="filter-btn">
            <FaFilter /> Filter
          </button>
          
          <div style={{ width: '220px' }}>
            <Select 
              options={sortOptions}
              defaultValue={sortOptions[6]}
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder="Sort by"
              isSearchable={false}
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: '#DEE2E6',
                  boxShadow: 'none',
                  '&:hover': { borderColor: '#007BFF' }
                })
              }}
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-frame">
              <img src={product.image_url} alt={product.name} loading="lazy" />
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              
              <div className="price-container">
                {product.discounted_price ? (
                  <>
                    <span className="current-price">₹{product.discounted_price}</span>
                    <span className="original-price">₹{product.actual_price}</span>
                    <span className="discount-tag">
                      {Math.round(((product.actual_price - product.discounted_price) / product.actual_price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <span className="current-price">₹{product.actual_price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventProducts;