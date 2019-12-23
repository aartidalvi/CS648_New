import React, {Component} from 'react';
import './App.css';
import Product from './Product';

class App extends Component {
  
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
