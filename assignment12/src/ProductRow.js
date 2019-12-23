import React from 'react';
import './App.css';

class ProductRow extends React.Component {
  
  constructor(props) {
    super(props)
  }

  
  render() {
    return (
          <tr>
              <td>{this.props.product.id}</td>
              <td>{this.props.product.name}</td>
              <td>{this.props.product.category}</td>
              <td>{this.props.product.price}</td>
          </tr>
    );
  }
}

export default ProductRow;
