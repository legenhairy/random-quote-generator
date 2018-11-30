import React, {Component} from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
  constructor(){
	super();
	this.state = {

	}
  }

  render() {
  	return (
  	  <div id='quote-box'>
  	  	<div className='text-field' id='text'>
  	  		Hi there im a new quote box. 
  	  	</div>
  	  	<div id='author'>
  	  		Harry Zhang 
  	  	</div>
  	  	<button className ='tweet-button' type='button' title="Tweet this quote!">
  	  	</button>

  	  </div>

  	);





  }


}

export default QuoteBox;