import React, {Component} from 'react';
import './App.css';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var prodlist = this.props.productlist;
    var filterText = this.props.filterText; 

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
                .filter(prodid => -1 < prodlist[prodid].name.indexOf(filterText))
                .map(prodid => {return (<ProductRow prodid = {prodlist[prodid].id} product = {prodlist[prodid]} />)}
              )}
          </tbody>
          </table>
      </div>
    );
  }  
}

export default ProductTable;

