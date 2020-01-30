import React, { Component } from 'react';
import Category from './Category';

class Home extends Component {
    componentDidMount() {
        if (window.DY !== null) {
            window.DY.API('spa', {
                context: {
                type: 'HOMEPAGE'
                },
                countAsPageview: true
            });
        }
            // window.DY.recommendationContext = { type: "HOMEPAGE" };
    }

    render() {
        return (
            <div className="home">
                <Category category="men" products={this.props.products} handleAddToCart={this.props.handleAddToCart} renderProductPage={this.props.renderProductPage} />
                <Category category="women" products={this.props.products} handleAddToCart={this.props.handleAddToCart} renderProductPage={this.props.renderProductPage} />
                <Category category="kids" products={this.props.products} handleAddToCart={this.props.handleAddToCart} renderProductPage={this.props.renderProductPage} />
            </div>
        )
    }
}

export default Home;