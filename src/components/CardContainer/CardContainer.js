import React from 'react';
import './_CardContainer.scss';
import Card from '../Card/Card.js';

function CardContainer({ people }) {
	const displayCard = people.map(person => {
		return ( 
			<Card 
				name={person.name}
				species={person.species}
				homeworld={person.homeworld}
				worldPopulation={person.worldPopulation}
				id={person.id}
				key={person.id} 
			/>
		)
	})
	return (
		<div>
			{displayCard}
		</div>
	)
}

export default CardContainer;

