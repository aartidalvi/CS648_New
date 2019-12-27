import React, { Component } from 'react'

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
        this.update = this.update.bind(this)
    }

    destroy() {
        this.props.onDestroy(this.props.product.productid);
    }

    update() {
        this.props.onUpdate(this.props.product.productid);
    }

    /* Render a table row for one product */
    render () {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.price}</td>
                <td>{String(this.props.product.instock)}</td>
                <td class="text-right"><button onClick={this.update} class="btn btn-info">Update(InStock)</button></td>
                <td class="text-right"><button onClick={this.destroy} class="btn btn-info">Delete</button></td>
            </tr>
        )
    }
}

export default ProductRow