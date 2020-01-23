import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart'



import './App.css';
import productDetails from './pages/ProductDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      men: [
        {
          src: "https://www.gap.com/webcontent/0017/953/890/cn17953890.jpg",
          price: "$29.99"
        },
        {
          src: "https://www.gap.com/webcontent/0017/971/260/cn17971260.jpg",
          price: "$14.99"
        }
      ],
      women: [
        {
          src: "https://www.gap.com/webcontent/0017/296/646/cn17296646.jpg",
          price: "$9.99"
        },
        {
          src: "https://www.gap.com/webcontent/0017/236/354/cn17236354.jpg",
          price: "$39.99"
        }
      ],
      kids: [
        {
          src: "https://www.gap.com/webcontent/0017/648/627/cn17648627.jpg",
          price: "$17.99"
        }, 
        { 
          src: "https://www.gap.com/webcontent/0017/429/400/cn17429400.jpg",
          price: "$12.99"
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
          <Navbar />
          <Fragment>
              <Route exact path="/home" render={() => <Home categories={this.state}/>} />
              <Route exact path="/"><Redirect to="/home" /></Route>
              <Route exact path="/men" render={() => <Category category="men" products={this.state.men} /> } />
              <Route exact path="/women" category="women" render={() => <Category category="women" products={this.state.women} />} />
              <Route exact path="/kids" category="kids" render={() => <Category category="kids" products={this.state.kids} />} />
              <Route exact path="/cart" category="cart" render={() => <Cart category="cart"/>} />
              <Route exact path="/productDetails/:id" category="cart" render={() => <productDetails />} />
          </Fragment>
      </div>
    );
  }
}

export default App;
