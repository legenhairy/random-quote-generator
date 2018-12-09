import React, {Component} from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
  constructor(){
	 super();
	 this.state = {
    quotes: [],
    index: null,
    author: ''
	 }
  }

  /*eventually, we want our box to load a random quote and its author on first load*/
  componentDidMount() {
    this.setState({author: 'Harry Zhang'});
  }

  /*when someone clicks on the new qipte button, we want to display a new quote */

  grabNewQuote = (event) => {
    console.log('Click here for a new quote');
    fetch('https://talaikis.com/api/quotes/random/')
      .then(response => response.json())
      .then(quotes => console.log(quotes));
  }

  render() {
  	return (
  	  <div id='quote-box'>
  	  	<div className='text-field' id='text'>
  	  		Hi there im a new quote box. 
  	  	</div>
  	  	<div id='author'>
  	  		<span></span>
  	  		{this.state.author}
  	  	</div>
  	  	<button className ='newquote' type='button' onClick= {this.grabNewQuote}>
  	  	Grab new quote! 
  	  	</button>
        <a href=''/>
  	  </div>

  	);
  }
}

export default QuoteBox;