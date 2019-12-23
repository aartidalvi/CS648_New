import React from 'react';
import './App.css';
import Product from './Product';

class App extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Product></Product>
      </div>
    );
  }
}

export default App;
