import React, { Component } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'
import $ from 'jquery'

const postURL = 'http://localhost:5000/product/create/';

let PRODUCTS = {
    '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet', instock: true},
    '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello', instock: true},
    '3': {id: 3, category: 'Music', price: '$3,500', name: 'Tuba', instock: false},
    '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge', instock: true},
    '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table', instock: true},
    '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag', instock: false}
};

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

    //function to send the post request to create new product.
    postReq(product) {
        $.ajax({
            type: 'POST',
            url: postURL,
            data: product
          }).then(() => {
            this.setState((prevState) => {
                let products = prevState.products
                products[product.id] = product
                return { products }
            })
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