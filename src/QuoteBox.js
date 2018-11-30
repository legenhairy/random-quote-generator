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
  	  		Harry Zhang is a placeholder for now.
  	  	</div>
  	  	


  	  </div>

  	);





  }


}

export default QuoteBox;