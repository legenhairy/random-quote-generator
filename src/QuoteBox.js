import React, {Component} from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
  constructor(){
	 super();
	 this.state = {
    quote: {
      content: '',
      author: ''
    },
	 }
  }

  /*eventually, we want our box to load a random quote and its author on first load*/
  /*every time we initially render quote box, have the quote empty*/
  componentDidMount() {
    this.setState({author: 'Harry Zhang', quote: ''});
    this.grabNewQuote();
  }

  /*when someone clicks on the new qipte button, we want to display a new quote */
  /*accessing the quote inside returned json object*/
  grabNewQuote = (event) => {
    console.log('Click here for a random new quote');
    
    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then(response => response.json())
      .then(quote => {
        console.log(quote)
      });
    
  }

  render() {
  	const { quote } = this.state;
    return (
  	  <div id='quote-box'>
  	  	<div className='text-field' id='text'>
  	  		Placeholder for now
  	  	</div>
  	  	<div id='author'>
  	  		<span>{quote.author}</span>
  	  	</div>
  	  	<button className ='newquote' type='button' onClick= {this.grabNewQuote}> Click me to get a random quote!</button>
        <a href='#placeholder'/>
  	  </div>

  	);
  }
}

export default QuoteBox;