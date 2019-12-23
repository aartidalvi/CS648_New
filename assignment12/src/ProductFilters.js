import React, {Component} from 'react';
import './App.css';

class ProductFilters extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    this.props.onFilter({
         filterText: value
    });
  }

  render() {
    return (
      <div id="ProductFilters">
          <input type="search" className="form-control d-inline-flex p-2 bd-highlight" name="SearchInput" placeholder="Search"  onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default ProductFilters;
