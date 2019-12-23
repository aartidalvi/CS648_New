import React, {Component} from 'react';
import './App.css';

class ProductRow extends Component {
  
  constructor(props) {
    super(props)
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
          </tr>
    );
  }
}

export default ProductRow;
