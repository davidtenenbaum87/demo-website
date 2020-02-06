import React, { Component, Fragment } from 'react';
import ProductCard from '../components/ProductCard';

class Product extends Component {
    componentDidMount() {    
        if (window.DY !== null) {
            window.DY.API('spa_start', {
                context: {
                type: 'PRODUCT',
                data: [this.props.location.productData.sku],
                },
                countAsPageview: true
            });
        }
        if (window.DYO !== null) {
            window.DYO.smartObject("Training - Recommendation Widget (Product Page - Similarity - Swiper slider - Embed Code)", {
                target: "dy_Training_-_Recommendation_Widget_(Product_Page_-_Similarity_-_Swiper_slider_-_Embed_Code)",
                inline: true
            });
        }
    }

    componentWillUnmount() {
        if (window.DY !== null) {
            window.DY.API('spa_end');
        }
    }
  
    render() {
        return (
            <Fragment>
                <ProductCard
                    productData={this.props.location.productData} 
                    handleAddToCart={this.props.location.handleAddToCart} 
                    handleRemoveFromCart={this.props.location.handleRemoveFromCart} 
                    className={this.props.location.className} />
                <div id="dy_Training_-_Recommendation_Widget_(Product_Page_-_Similarity_-_Swiper_slider_-_Embed_Code)"></div>
            </Fragment>
        )
    }
}

export default Product;