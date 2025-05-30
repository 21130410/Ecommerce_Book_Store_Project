import React from "react";
import PropTypes from "prop-types";

function Sort({ currentSort, onChange }) {
  return (
    <div className="product-sort">
      <label htmlFor="sort-select">Sắp xếp theo: </label>
      <select
        id="sort-select"
        value={currentSort}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="PRICE_ASC">Giá: Thấp đến Cao</option>
        <option value="PRICE_DESC">Giá: Cao đến Thấp</option>
        <option value="NAME_ASC">Tên: A - Z</option>
        <option value="NAME_DESC">Tên: Z - A</option>
      </select>
    </div>
  );
}

Sort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sort;
