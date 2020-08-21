import React from 'react';
import Header from './components/header/Header';
import Products from './components/products/products';
import ProductItem from './components/productItem/productItem'
import './App.scss';

function App() {
  return (
    <div>
        <Header />
        {/* <Products /> */}
        <ProductItem />
    </div>
  );
}

export default App;
