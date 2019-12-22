import React, { Component } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'
import $ from 'jquery'

const postURL = 'http://localhost:5000/product/create/';
const getURL = 'http://localhost:5000/product/get/';

let PRODUCTS = {};

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            products: PRODUCTS
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    //Reference: https://reactjs.org/docs/react-component.html
    componentDidMount() {
        var temp = {};
        $.ajax({
            type: 'GET',
            url: getURL,
            dataType: 'json',
            async: false,
            success: function (data) {
              console.log(data);
              temp = data;
            }
           }).then(() => {
                console.log('temp is:' + temp);
                this.setState({products:temp}); 
           })
    }

    //function to send the post request to create new product.
    postReq(product) {
        var temp = {};
        $.ajax({
            type: 'POST',
            url: postURL,
            data: product
          }).then(() => {
            $.ajax({
                type: 'GET',
                url: getURL,
                dataType: 'json',
                async: false,
                success: function (data) {
                  console.log(data);
                  temp = data;
                }
               })
          }).then(() => {
            console.log('temp is:' + temp);
          this.setState({products:temp}); 
        })
    }

    handleSave(product) {
        if (!product.id) {
            product.id = new Date().getTime()
        }
        return this.postReq(product)
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        });
    }

    render () {
        return (
            <div>
                <h1>My Inventory</h1>
                <Filters 
                    onFilter={this.handleFilter}></Filters>
                <ProductTable 
                    products={this.state.products}
                    filterText={this.state.filterText}
                    onDestroy={this.handleDestroy}></ProductTable>
                <ProductForm
                    onSave={this.handleSave}></ProductForm>
            </div>
        )
    }
}

export default Products