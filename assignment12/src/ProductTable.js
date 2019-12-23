import React from 'react';
import './App.css';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var prodlist = this.props.productlist;

    return (
      <div className="ProductTable" id="ProductTable">            
          <table>
          <thead>
              <tr>
                  <th>ID</th> <th>Name</th> <th>Category</th> <th>Price</th>
              </tr>
          </thead>
          <tbody>
              {Object.keys(prodlist)
                .map(prodid => {return (<ProductRow prodid = {prodlist[prodid].id} product = {prodlist[prodid]} />)}
              )}
          </tbody>
          </table>
      </div>
    );
  }  
}

export default ProductTable;

