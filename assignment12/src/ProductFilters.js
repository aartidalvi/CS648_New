import React from 'react';
import logo from './logo.svg';
import './App.css';

function ProductFilters() {
  return (
    <div className="ProductFilters" id="ProductFilters">
        <input type="search" name="SearchInput"></input>
        <button type="SearchButton">Search</button>
    </div>
  );
}

export default ProductFilters;
