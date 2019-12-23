import React, {Component} from 'react';
import './App.css';
import ProductFilters from './ProductFilters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

//The customised default list of products
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

    this.handleFilter = this.handleFilter.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleFilter(filterInput) {
    this.setState(filterInput)
  }

  handleSave(product) {
      // console.log(product);
      
      if (!product.id) {
          product.id = new Date().getTime()
      }
      this.setState((prevState) => {
          let productlist = prevState.productlist
          productlist[product.id] = product
          return { productlist }
      });
  }

  render() {
    const { productlist, filterText} = this.state;

    return (
      <div id="ProductDiv" className="Product-Align">    
          <hr></hr>
          <h1>My Inventory (Client)</h1>
          <hr></hr>
          
          <div id="ProductFilterDiv" className="ProductFilterDiv">
          <ProductFilters onFilter={this.handleFilter}></ProductFilters>
          </div> <hr></hr>

          <div id="ProductTableDiv" className="ProductTableDiv">
          <ProductTable productlist={productlist} filterText={filterText}></ProductTable>
          </div> <hr></hr>

          <div id="ProductFormDiv" className="ProductFormDiv">
          <ProductForm onSave={this.handleSave}></ProductForm>
          </div>
      </div>
    );
  }
}

export default Product;
