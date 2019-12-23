import React, {Component} from 'react';
import './App.css';
import ProductFilters from './ProductFilters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

//The customised default list of products
let PRODUCTS = {
  '1': {id: 1, category: 'Music', price: '$459.99', name: 'Guitar'},
  '2': {id: 2, category: 'Furniture', price: '$79', name: 'Chair'},
  '3': {id: 3, category: 'Hardware', price: '$999', name: 'Laptop'},
  '4': {id: 4, category: 'Utensils', price: '$100', name: 'Cooking Pans'},
  '5': {id: 5, category: 'Furniture', price: '$1000', name: 'Couch'}
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
    this.handleDestroy = this.handleDestroy.bind(this)
  }

  handleFilter(filterInput) {
    this.setState(filterInput)
  }

  handleSave(product) {
      if (!product.id) {
          product.id = new Date().getTime()
      }
      this.setState((prevState) => {
          let productlist = prevState.productlist
          productlist[product.id] = product
          return { productlist }
      });
  }

  handleDestroy(productId) {
    // console.log("Prod Destroy id:" + productId);

    this.setState((prevState) => {
         let productlist = prevState.productlist
         //console.log("Before:");
         //console.log(productlist);
         delete productlist[productId]
         //console.log("After:");
         //console.log(productlist);
         return { productlist }
    })
}


  render() {
    const { productlist, filterText} = this.state;

    return (
      <div id="ProductDiv" className="Product-Align">    
          <h1>My Inventory (Client)</h1>
          
          <div id="ProductFilterDiv">
          <ProductFilters onFilter={this.handleFilter}></ProductFilters>
          </div> <br />

          <div id="ProductTableDiv">
          <ProductTable productlist={productlist} filterText={filterText} onDestroy={this.handleDestroy}></ProductTable>
          </div>

          <h2>Add a new product</h2>

          <div id="ProductFormDiv">
          <ProductForm onSave={this.handleSave}></ProductForm>
          </div>
      </div>
    );
  }
}

export default Product;
