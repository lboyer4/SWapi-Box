import React from 'react';
import './_CardContainer.scss';
import Card from '../Card/Card.js';

function CardContainer({ things, addFavorite, removeFavorite }) {
	const displayCard = things.map(thing => {
		return ( 
			<Card 
				{...thing}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
				key={thing.id}			
			/>
		)
	})
	return (
		<div className="card-container">
			{displayCard}
		</div>
	)
}

export default CardContainer;

