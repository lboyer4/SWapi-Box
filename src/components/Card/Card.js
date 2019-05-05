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
		const {id, addFavorite, removeFavorite} = this.props;
		const favorited = !this.state.favorited
		this.setState({favorited})
		favorited ? addFavorite(id) : removeFavorite(id)
		} 


	render() {
		const cardData = Object.keys(this.props).map((key, index) => {
			const acceptedKey = key !== 'id' && key !== 'addFavorite' && key !== 'removeFavorite';
			return acceptedKey && <h5 key={index}> {key}: { this.props[key] }</h5>
		})

		const favorited = this.state.favorited ? 'favorited' : ''
		return (
			<article className={favorited}>

				{cardData}
				<button onClick={this.handleClick}>favorite</button>		
			</article>
		)
	}
}


export default Card;