import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    let PRODUCTS = {
      '1': {id: 10, category: 'Music', price: '$459.99', name: 'Clarinet'},
      '2': {id: 20, category: 'Hardware', price: '$500', name: 'Dell'},
      '3': {id: 30, category: 'Furniture', price: '$80', name: 'Chair'},
      '4': {id: 40, category: 'Furniture', price: '$1,300', name: 'Table'},
  };
  
    return (
      <div className="ProductTable" id="ProductTable">            
          <table>
              <ProductRow></ProductRow>
              <ProductRow></ProductRow>
          </table>
      </div>
    );
  }
}

export default ProductTable;

