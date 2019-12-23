import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductRow from './ProductRow';

function ProductTable() {
  return (
    <div className="ProductTable" id="ProductTable">            
        <table>
            <ProductRow></ProductRow>
            <ProductRow></ProductRow>
        </table>
    </div>
  );
}

export default ProductTable;

