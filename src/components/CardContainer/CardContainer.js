import React from 'react';
import './_CardContainer.scss';
import Card from '../Card/Card.js';

function CardContainer({ people }) {
	const displayCard = people.map(person => {
	return <Card {...person} key={person.id} />
	})
	return (
		<div>
			{displayCard}
		</div>
	)
}

export default CardContainer;

