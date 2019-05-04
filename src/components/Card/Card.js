import React, { Component } from 'react';
import './_Card.scss';


class Card extends Component {
	constructor() {
		super();
		this.state = {
			favorited: false
		}
	}

	handleClick = (e) => {
		const favorited = !this.state.favorited
		this.setState({favorited})
		if (favorited) {
			e.target.parentElement.classList += 'favorited';
		} else {
			e.target.parentElement.classList = '';
		}	
	}

	render() {
		const cardData = Object.keys(this.props).map(key => {
			return <h5>{ this.props[key] }</h5>
		})
		return (
			<article>
				{cardData}
				<button onClick={this.handleClick}>favorite</button>		
			</article>
		)
	}
}


export default Card;