import React, {Component} from 'react';
import './App.css';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props)
    this.handleDestroy = this.handleDestroy.bind(this)
  }

  handleDestroy(id) {
    // console.log("Table Destroy id:" + id);
    this.props.onDestroy(id)
  }

  //References: Module 12 - 15
  render() {
    var prodlist = this.props.productlist;
    var filterText = this.props.filterText; 

    return (
      <div className="ProductTable" id="ProductTable">            
          <table className="table table-bordered table-striped">
          <thead>
              <tr>
                  <th>ID</th> <th>Name</th> <th>Category</th> <th>Price</th> <th></th>
              </tr>
          </thead>
          <tbody>
              {Object.keys(prodlist)
                .filter(prodid => -1 < prodlist[prodid].name.indexOf(filterText))
                .map(prodid => {return (
                <ProductRow 
                  prodid = {prodlist[prodid].id} 
                  product = {prodlist[prodid]} 
                  onDestroy={this.handleDestroy}/>)}
              )}
          </tbody>
          </table>
      </div>
    );
  }  
}

export default ProductTable;

