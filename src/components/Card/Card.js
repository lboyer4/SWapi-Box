import React, { Component } from 'react';
import './_Card.scss';

class Card extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		const { name, species, id, homeworld, worldPopulation } = this.props;
		// console.log( this.props )
		return (
			<article>
				<h3>{name}</h3>
				<h5>{species}</h5>
				<h5>{homeworld}</h5>
				<h6>{worldPopulation}</h6>
				<button>favorite</button>
			</article>

			)
	}
}


export default Card;