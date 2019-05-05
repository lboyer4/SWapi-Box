import React from 'react';
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';

describe("CardContainer", () => {
	let wrapper;

	const mockAddFavorite = jest.fn();
	const mockRemoveFavorite = jest.fn();
	const mockThings = {
		"homeworld": "Tatooine",
		"id": 1,
		"name": "Luke Skywalker",
		"species": "Human",
		"worldPopulation": "200000"
	}

	beforeEach(() => {
		wrapper = shallow(
			<CardContainer
				things=mockThings
				addFavorite=mockAddFavorite
				removeFavorite=mockRemoveFavorite
			/>
			)
	});

	it ('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

})