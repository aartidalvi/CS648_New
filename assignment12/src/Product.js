import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductFilters from './ProductFilters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

class Product extends React.Component {
  render() {
    return (
      <div className="Product-Align">    
          <hr></hr>

          <h1>My Inventory (Client)</h1>

          <hr></hr>

          <div className="ProductFilterDiv">
          <ProductFilters></ProductFilters>
          </div>

          <hr></hr>
          
          <div className="ProductTableDiv">
          <ProductTable></ProductTable>
          </div>

          <hr></hr>

          <div className="ProductFormDiv">
          <ProductForm></ProductForm>
          </div>
      </div>
    );
  }
}

export default Product;
