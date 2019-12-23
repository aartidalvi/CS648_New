import React, {Component} from 'react';
import './App.css';

class ProductFilters extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="ProductFilters" id="ProductFilters">
          <input type="search" name="SearchInput"></input>
          <button type="SearchButton">Search</button>
      </div>
    );
  }
}

export default ProductFilters;
