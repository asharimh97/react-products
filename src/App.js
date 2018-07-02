import React, { Component } from 'react';
import ProductList from './components/ProductList'
import './App.css';

const dataProducts = [
  {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
  {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
  {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
  {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
  {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
  {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      onlyAvailable : false
    }

    this.toggleAvailable = this.toggleAvailable.bind(this)
  }

  toggleAvailable(){
    this.setState({
      onlyAvailable: !this.state.onlyAvailable
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Products Available</h1>
        <div className="product">
          <div className="product-search">
            <input type="text" name="search" placeholder="Search..." /><br/>
            <input type="checkbox" name="checkStock" id="checkStock" onChange={ this.toggleAvailable } /><label htmlFor="checkStock">Show only available products</label>
          </div>
          <div className="product-result">
            <h3>Name (Price)</h3>
            {
              dataProducts
                .map(item => item.category)
                .filter((value, index, self) => self.indexOf(value) === index)
                .map(category => (
                  <ProductList productCategory={ category } products={ dataProducts } onlyAvailable={ this.state.onlyAvailable }/>
                ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
