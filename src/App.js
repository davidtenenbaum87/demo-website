import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import { Route, Redirect } from 'react-router-dom';
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

  handleAddToCart = (e, sku) => {
    if (this.state.products.length !== 0) {
      this.state.products.forEach((product) => {
        if (product.sku === sku) {
          let cart = [...this.state.cart];
          cart.push(product);
          let total = this.state.total;
          total = total === null ? product.price : total += product.price;
          this.setState({ cart, total }, () => window.cartValue = this.state.total);
        }
      })
    }
  }

  handleRemoveFromCart = (e, sku) => {
    let cart = [...this.state.cart];
    let itemIndex = cart.findIndex(cartItem => cartItem.sku === sku);
    let total = this.state.total;
    total -= cart[itemIndex].price;
    cart = cart.slice(0, itemIndex).concat(cart.slice(itemIndex + 1));
    this.setState({ cart, total }, () => window.cartValue = this.state.total);
  }

  render() {
    return (
      <div className="App">
          <Navbar />
          <Fragment>
              <Redirect from="/" to="/demo-website/home" />
              <Route exact path="/demo-website/home" render={() => <Home products={this.state.products} handleAddToCart={this.handleAddToCart} />} />
              <Route exact path="/demo-website/category/men" render={() => <Category category="men" products={this.state.products} handleAddToCart={this.handleAddToCart}/>} />
              <Route exact path="/demo-website/category/women" render={() => <Category category="women" products={this.state.products} handleAddToCart={this.handleAddToCart}/>} />
              <Route exact path="/demo-website/category/kids" render={() => <Category category="kids" products={this.state.products} handleAddToCart={this.handleAddToCart}/>} />
              <Route exact path="/demo-website/cart" render={() => <Cart category="cart" cartItems={this.state.cart} total={this.state.total} handleRemoveFromCart={this.handleRemoveFromCart} />} />

              <Route exact path="/demo-website/category/:category/product/:id" component={Product} />

          </Fragment>
      </div>
    );
  }
}

export default App;
