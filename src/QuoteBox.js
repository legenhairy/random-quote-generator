import React, {Component} from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
  constructor(){
	 super();
	 this.state = {

	 }
  }

  /*eventually, we want our box to load a random quote on first load*/
  componentDidMount() {

  }

  /*when someone clicks on the new qipte button, */

  grabNewQuote = () => {
    
  }

  render() {
  	return (
  	  <div id='quote-box'>
  	  	<div className='text-field' id='text'>
  	  		Hi there im a new quote box. 
  	  	</div>
  	  	<div id='author'>
  	  		<span></span>
  	  		Harry Zhang 
  	  	</div>
  	  	<button className ='newquote' type='button' title="Grab a new quote!">
  	  	Grab new quote! 
  	  	</button>

  	  </div>

  	);





  }


}

export default QuoteBox;