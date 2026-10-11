import React from 'react';

const Filter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
      {categories.map((category) => (
        <button
          key={category}
          className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;