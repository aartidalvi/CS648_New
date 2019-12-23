import React, {Component} from 'react';
import './App.css';
import ProductFilters from './ProductFilters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

//The customsed default list of products
let PRODUCTS = {
  '1': {id: 10, category: 'Music', price: '$459.99', name: 'Guitar'},
  '2': {id: 20, category: 'Furniture', price: '$79', name: 'Chair'},
  '3': {id: 30, category: 'Hardware', price: '$999', name: 'Laptop'},
  '4': {id: 40, category: 'Utensils', price: '$100', name: 'Cooking Pans'},
  '5': {id: 50, category: 'Furniture', price: '$1000', name: 'Couch'}
};

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
        productlist: PRODUCTS,
        filterText: ''
    }
  }

  render() {
    const { productlist, filterText} = this.state;

    return (
      <div id="ProductDiv" className="Product-Align">    
          <hr></hr>
          <h1>My Inventory (Client)</h1>
          <hr></hr>
          
          <div id="ProductFilterDiv" className="ProductFilterDiv">
          <ProductFilters></ProductFilters>
          </div> <hr></hr>

          <div id="ProductTableDiv" className="ProductTableDiv">
          <ProductTable productlist={productlist} filterText={filterText}></ProductTable>
          </div> <hr></hr>

          <div id="ProductFormDiv" className="ProductFormDiv">
          <ProductForm></ProductForm>
          </div>
      </div>
    );
  }
}

export default Product;
