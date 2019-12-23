import React from 'react';
import logo from './logo.svg';
import './App.css';

function ProductForm() {
  return (
    <div className="ProductForm" id="ProductForm">
        
        <p></p>
        <label for="NameInput">Name</label><br></br>
        <input type="text" name="NameInput" id="NameInput"></input>
        
        <p></p>
        <label for="CategoryInput">Category</label><br></br>
        <input type="text" name="CategoryInput" id="CategoryInput"></input>
        
        <p></p>
        <label for="PriceInput">Price</label><br></br>
        <input type="text" name="PriceInput" id="PriceInput"></input>
        
        <p></p>
        <button type="SaveButton" id="SaveButton">Save</button>

    </div>
  );
}

export default ProductForm;
