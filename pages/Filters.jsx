import React, { useState } from "react";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import "./Filter.css";

const Filters = () => {
  const [categories] = useState([
    "Air Blowers",
    "Air Conditioners",
    "Air Coolers",
    "Blood Glucose Monitors",
    "Blood Pressure Monitors",
  ]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    todayLowest: false,
    todayDropped: true,
    thisWeek: false,
    thisMonth: false,
  });

  const handleClearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedFilters({
      todayLowest: false,
      todayDropped: false,
      thisWeek: false,
      thisMonth: false,
    });
  };

  return (
    <div className="filters-wrapper">
      <div className="filters-header">
        <span className="filters-title">
          FILTERS <FaAngleDown />
        </span>
        <div className="filters-actions">
          <span className="clear-all" onClick={handleClearFilters}>
            CLEAR ALL
          </span>
          <FaPlus className="plus-icon" />
        </div>
      </div>

      {/* Price Dropped Section */}
      <div className="filter-section">
        <div className="filter-section-header">
          <span className="section-title">Price Dropped</span>
          <span
            className="section-clear"
            onClick={() => setSelectedFilters({})}
          >
            CLEAR
          </span>
        </div>
        <label>
          <input
            type="checkbox"
            checked={selectedFilters.todayLowest}
            onChange={() =>
              setSelectedFilters({
                ...selectedFilters,
                todayLowest: !selectedFilters.todayLowest,
              })
            }
          />
          Today (Dropped to Lowest)
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFilters.todayDropped}
            onChange={() =>
              setSelectedFilters({
                ...selectedFilters,
                todayDropped: !selectedFilters.todayDropped,
              })
            }
          />
          Today (Dropped)
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFilters.thisWeek}
            onChange={() =>
              setSelectedFilters({
                ...selectedFilters,
                thisWeek: !selectedFilters.thisWeek,
              })
            }
          />
          This Week
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFilters.thisMonth}
            onChange={() =>
              setSelectedFilters({
                ...selectedFilters,
                thisMonth: !selectedFilters.thisMonth,
              })
            }
          />
          This Month
        </label>
      </div>

      {/* Price Filter Section */}
      <div className="filter-section">
        <span className="section-title">Price</span>
        <div className="price-inputs">
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min Price"
            className="price-input"
          />
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
            className="price-input"
          />
          <button className="go-btn">Go »</button>
        </div>
      </div>

      {/* Category Section */}
      <div className="filter-section">
        <span className="section-title">Category</span>
        <input
          type="text"
          className="category-search"
          placeholder="Search Category"
        />
        <div className="category-list">
          {categories.map((category, index) => (
            <label key={index}>
              <input type="checkbox" /> {category}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
