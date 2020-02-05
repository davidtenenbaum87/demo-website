import React, { Component, Fragment } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.productData = this.props.location.productData;
    }

    componentDidMount() {
        if (window.DY !== null) {
            window.DY.API('spa_start', {
                context: {
                type: 'PRODUCT',
                data: [this.productData.sku],
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
                <div className="product">
                    <div className="product-details">
                        <div className="product-image" id={this.productData.sku}>
                            <img src={this.productData.image_url} alt={this.productData.category} id={this.productData.sku} />
                        </div>
                        <div className="product-data">
                            <div className="product-name">
                                <p>{this.productData.name}</p>
                            </div>
                            <div className="product-price">
                                <p>${this.productData.price}</p>
                            </div>
                        </div>
                    </div>
                    {this.props.location.className === "product-item" ? 
                        <button className="product-btn-add-cart" onClick={(e) => this.props.location.handleAddToCart(e, this.productData.sku)} >ADD TO CART</button>
                    :
                        null
                    }
                </div>
                {/* <div className="dy-div"></div> */}
                <div id="dy_Training_-_Recommendation_Widget_(Product_Page_-_Similarity_-_Swiper_slider_-_Embed_Code)"></div>
            </Fragment>
        )
    }
}

export default Product;