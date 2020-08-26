import React from 'react';
import Header from './components/header/Header';
import Products from './components/products/products';
import ProductItem from './components/productItem/productItem'
import Cart from './components/cart';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Products />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/products/:id'>
            <ProductItem />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
