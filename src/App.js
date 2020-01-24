import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import Cart from './pages/Cart';
import {data} from './pages/fakeData';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
    }
  }

  componentDidMount() {
    this.setState({products: Object.values(data)[0]});
  }

  handleAddToCart = (e) => {
    // if (this.state.products.length !== 0) {
    //   this.state.products.forEach((product) => {
    //     if (product.id === e.target.id) {
    //       return <Redirect to="/productDetails"><ProductDetails key={product.id} className="product-details" productData={product} /></Redirect>;
    //     }
    //   })
    // }
    console.log("cart");
  }

  render() {
    return (
      <div className="App">
          <Navbar />
          <Fragment>
              <Route exact path="/home" render={() => <Home products={this.state.products} handleAddToCart={this.handleAddToCart}/>} />
              <Route exact path="/"><Redirect to="/home" /></Route>
              <Route exact path="/men" render={() => <ProductList category="men" products={this.state.products} handleAddToCart={this.handleAddToCart} />} />
              <Route exact path="/women" category="women" render={() => <ProductList category="women" products={this.state.products} handleAddToCart={this.handleAddToCart} />} />
              <Route exact path="/kids" category="kids" render={() => <ProductList category="kids" products={this.state.products} handleAddToCart={this.handleAddToCart} />} />
              <Route exact path="/cart" category="cart" render={() => <Cart category="cart"/>} />
          </Fragment>
      </div>
    );
  }
}

export default App;
