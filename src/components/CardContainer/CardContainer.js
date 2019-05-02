import React, { Component } from 'react';
import './_CardContainer.scss';
import 'Card' from '../Card/Card.js'

class CardContainer extends Component{
	constructor() {
		super();
		this.state = {
			title: ''
		}
	}

	render() {
		return (
			<section>
				<h3>this.title</h3>
				<Card />
			</section>
		)
	}

}

export default CardContainer;