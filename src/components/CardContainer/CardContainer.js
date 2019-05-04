import React from 'react';
import './_CardContainer.scss';
import Card from '../Card/Card.js';

function CardContainer({ things }) {
	const displayCard = things.map(thing => {
		return ( 
			<Card 
				{...thing}
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

