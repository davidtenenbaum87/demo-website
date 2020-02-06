import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

class Category extends Component {
    componentDidMount() {
        if (window.DY !== null) {
            window.DY.API('spa_start', {
                context: {
                    type: 'CATEGORY',
                    data: [this.props.category],
                },
                countAsPageview: true
            });
        }
    }

    componentWillUnmount() {
        if (window.DY !== null) {
            window.DY.API('spa_end');
        }
    }

    renderProducts = () => this.props.products.filter(p => p.category === this.props.category).map((product) => {
        return <ProductCard key={product.sku} productData={product} handleAddToCart={this.props.handleAddToCart} handleRemoveFromCart={null} className="product-item category-page"/>;
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