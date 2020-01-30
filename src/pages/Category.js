import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

// const Category = ({ category, products, handleAddToCart }) => {
class Category extends Component {
    componentDidMount() {
        if (window.DY !== null) {
            window.DY.API('spa', {
                context: {
                type: 'CATEGORY',
                data: [this.props.category],
                },
                countAsPageview: true
            });
        }
    }

    renderProducts = () => this.props.products.filter(p => p.category === this.props.category).map((product) => {
        return <ProductCard key={product.sku} productData={product} handleAddToCart={this.props.handleAddToCart} className="product-item"/>;
    })

    render() {
        return (
            <div className={`category ${this.props.category}`}>
                {this.renderProducts()}
            </div>
        )
    }
}

export default Category;