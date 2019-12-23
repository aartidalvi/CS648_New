import React from 'react';
import logo from './logo.svg';
import './App.css';

class ProductForm extends React.Component {
  render() {
    return (
      <div className="ProductForm" id="ProductForm">
          
          <p></p>
          <label>Name</label><br></br>
          <input type="text" name="NameInput" id="NameInput"></input>
          
          <p></p>
          <label>Category</label><br></br>
          <input type="text" name="CategoryInput" id="CategoryInput"></input>
          
          <p></p>
          <label>Price</label><br></br>
          <input type="text" name="PriceInput" id="PriceInput"></input>
          
          <p></p>
          <button type="SaveButton" id="SaveButton">Save</button>

      </div>
    );
  }
}
export default ProductForm;
