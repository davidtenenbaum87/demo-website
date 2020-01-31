import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Product from './pages/Product';
import data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      total: null,
    }
  }

  componentDidMount() {
    this.setState({products: data});
    window.cartValue = this.state.total || 0;
  }

  calculateCartTotal = () => {
    let total;
    if (this.state.cart.length !== 0) {
      total = [...this.state.cart].map(cartItem => cartItem.price).reduce((acc, x) => acc + x);
      this.setState({ total }, () => window.cartValue = this.state.total);
    } else {
      total = null;
      this.setState({ total }, () => window.cartValue = this.state.total);
    }
  }

  handleAddToCart = (e, sku) => {
    if (this.state.products.length !== 0) {
      this.state.products.forEach((product) => {
        if (product.sku === sku) {
          this.setState({ cart: [...this.state.cart, product] }, () => { this.calculateCartTotal(); this.props.history.goBack() });
        }
      })
    }

    if (window.DY) {
      window.DY.API("event", {
        name: "Add to Cart",
        properties: {
          dyType: "add-to-cart-v1",
          value: this.state.products.find(item => item.sku === sku).price,
          currency: "any supported currency code",
          productId: this.state.products.find(item => item.sku === sku).sku.toString(),
          quantity: 1,
          cart: [...this.state.cart]
        }
      });
    }
  }

  handleRemoveFromCart = (e, sku) => {
    let cart = [...this.state.cart].filter(cartItem => cartItem.sku !== sku);
    this.setState({ cart }, () => this.calculateCartTotal());
  }

  render() {
    return (
      <div className="App">
          <Navbar />
          <Fragment>
              {/* <Redirect from="/" to="/demo-website/home" /> */}
              <Route exact path="/" render={() => <Home products={this.state.products} handleAddToCart={this.handleAddToCart} />} />
              <Route exact path="/category/men" render={() => <Category category="men" products={this.state.products} handleAddToCart={this.handleAddToCart}/>} />
              <Route exact path="/category/women" render={() => <Category category="women" products={this.state.products} handleAddToCart={this.handleAddToCart}/>} />
              <Route exact path="/category/kids" render={() => <Category category="kids" products={this.state.products} handleAddToCart={this.handleAddToCart}/>} />
              <Route exact path="/cart" render={() => <Cart category="cart" cartItems={this.state.cart} total={this.state.total} handleRemoveFromCart={this.handleRemoveFromCart} />} />
              <Route exact path="/category/:category/product/:id" component={Product} />
          </Fragment>
      </div>
    );
  }
}

export default App;
