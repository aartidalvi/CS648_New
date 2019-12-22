import React, { Component } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'
import $ from 'jquery'

const postURL = 'http://localhost:5000/product/create/';
const getURL = 'http://localhost:5000/product/get/';
const deleteURL = 'http://localhost:5000/product/delete/';

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
        this.getReq();
    }

    getReq() {
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
        if (!product.productid) {
            product.productid = new Date().getTime()
        }
        return this.postReq(product)
    }

    handleDestroy(productid){
        console.log('Prod ID to be deleted: '+ productid);

        $.ajax({
            type: 'DELETE',
            url: deleteURL + productid
          }).then(() => {
            this.getReq()
          })
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