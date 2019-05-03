import React, { Component } from 'react';
import './_Card.scss';

class Card extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		const { name, homeworld, population, species } = this.props;
		return (
			<article>
				<h3>{name}</h3>
			</article>

			)
	}
}


export default Card;