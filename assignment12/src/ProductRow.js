import React from 'react';
import logo from './logo.svg';
import './App.css';

class ProductRow extends React.Component {
  render() {
    return (
      <div className="ProductRow" id="ProductRow">
          <tr>
              <td>ID Dummy</td>
              <td>Name Dummy</td>
              <td>Category Dummy</td>
              <td>Price Dummy</td>
          </tr>
      </div>
    );
  }
}
export default ProductRow;
