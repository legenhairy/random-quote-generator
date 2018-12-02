import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import Header from './Header';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <Header />
        <QuoteBox className='quote-box' />
          

      </div>
    );
  }
}

export default App;
