import React, { Component, Fragment } from 'react';
import ProductCard from '../components/ProductCard';
import data from '../data.json';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: null,
        }
    }

    componentDidMount() {    
        this.setState({
            productData: this.props.location.productData || data.find(p => p.sku === this.props.match.params.id)
        }, () => this.updateRecommendationContext());
    }

    componentWillUnmount() {
        if (window.DY !== null) {
            window.DY.API('spa_end');
        }
    }

    updateRecommendationContext = () => {
        if (window.DY !== null) {
            window.DY.API('spa_start', {
                context: {
                    type: 'PRODUCT',
                    data: [this.state.productData.sku],
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
  
    render() {
        if (this.state.productData) {
            return (
                <Fragment>
                    <ProductCard
                        productData={this.state.productData} 
                        handleAddToCart={this.props.handleAddToCart} 
                        handleRemoveFromCart={this.props.handleRemoveFromCart} 
                        className={"product-item product-page"} />
                    <div id="dy_Training_-_Recommendation_Widget_(Product_Page_-_Similarity_-_Swiper_slider_-_Embed_Code)"></div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    Loading...
                </Fragment>
            )
        };
    }
}

export default Product;