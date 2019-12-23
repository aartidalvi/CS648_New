import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Product></Product>
      </div>
    );
  }
}

export default App;
