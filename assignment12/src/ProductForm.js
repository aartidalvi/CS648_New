import React, {Component} from 'react';
import './App.css';

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

/* Class to handle the form which creates new entry of product in the cluster. */
class ProductForm extends Component {
  constructor(props) {
    super(props)    
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
    this.state = {
      product: Object.assign({}, RESET_VALUES), errors: {}
    } 
  }
  
  handleSave(e) {
      this.props.onSave(this.state.product)
      this.setState({
          product: Object.assign({}, RESET_VALUES), errors: {}
      })
      //Prevent form from triggering HTTP POST
      e.preventDefault(); 
  }

  handleChange(e) {
      const target = e.target
      const propvalue = target.value
      const name = target.name

      // console.log("Property:" + target.name + ", value:" + target.value)

      this.setState((prevState) => {
          prevState.product[name] = propvalue
          return { product: prevState.product }
      })
  }

  render() {
    return (
      <div className="ProductForm" id="ProductForm">
          <p></p>
          <label>Name</label><br></br>
          <input type="text" name="name" id="NameInput" onChange={this.handleChange} value={this.state.product.name}></input>
          
          <p></p>
          <label>Category</label><br></br>
          <input type="text" name="category" id="CategoryInput" onChange={this.handleChange} value={this.state.product.category} ></input>
          
          <p></p>
          <label>Price</label><br></br>
          <input type="text" name="price" id="PriceInput" onChange={this.handleChange} value={this.state.product.price} ></input>
          
          <p></p>
          <button type="Button" id="SaveButton" className="btn btn-primary" onClick={this.handleSave}>Save</button>

      </div>
    );
  }
}
export default ProductForm;
