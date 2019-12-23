import React, {Component} from 'react';
import './App.css';

class ProductRow extends Component {
  
  constructor(props) {
    super(props)
    this.destroy = this.destroy.bind(this)
  }

  destroy() {
    // console.log("Row Destroy id:" + this.props.product.id);
    this.props.onDestroy(this.props.product.id);
  }

  render() {
    //Reference Module 12, Lecture 11
    const {id, name, category, price} = this.props.product;
    return (
          <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{category}</td>
              <td>{price}</td>
              <td><button type="Button" id="DeleteButton" onClick={this.destroy}>Delete</button></td>
          </tr>
    );
  }
}

export default ProductRow;
