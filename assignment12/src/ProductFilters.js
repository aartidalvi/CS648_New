import React, {Component} from 'react';
import './App.css';

class ProductFilters extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const value = e.target.value
    const name = e.target.name

    this.props.onFilter({
         filterText: value
    });
  }

  render() {
    return (
      <div className="ProductFilters" id="ProductFilters">
          <input type="search" name="SearchInput" placeholder="Search"  onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default ProductFilters;
