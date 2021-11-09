import logo from './logo.svg';
import React, { Component } from 'react';
import ProductList from './components/ProductList';
import MyProvider from './components/MyProvider';
import './App.css';

class App extends Component {
  state = {
      cars: {
          car001: { name: 'Honda', price: 100 },
          car002: { name: 'BMW', price: 150 },
          car003: { name: 'Mercedes', price: 200 }
      }
  };
  incrementCarPrice = this.incrementCarPrice.bind(this);
  decrementCarPrice = this.decrementCarPrice.bind(this);

  incrementCarPrice(selectedID) {
      // a simple method that manipulates the state
      const cars = Object.assign({}, this.state.cars);
      cars[selectedID].price = cars[selectedID].price + 1;
      this.setState({
          cars
      });
  }

  decrementCarPrice(selectedID) {
      // a simple method that manipulates the state
      const cars = Object.assign({}, this.state.cars);
      cars[selectedID].price = cars[selectedID].price - 1;
      this.setState({
          cars
      });
  }

  render() {
      return (
        <MyProvider>
            <div className="App-header">
              {/* Pass props twice */}
              <ProductList/>
          </div>
        </MyProvider>
      );
  }
}

export default App;
