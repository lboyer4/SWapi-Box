import React from 'react';
import { shallow } from 'enzyme';
import  Card  from './Card.js';

describe('Card', () => {
	let wrapper;

	const mockAddFavorite = jest.fn();
	const mockRemoveFavorite = jest.fn();
	const mockPerson = {
		"homeworld": "Tatooine",
		"id": 1,
		"name": "Luke Skywalker",
		"species": "Human",
		"worldPopulation": "200000"
	}
	const mockPlanet = {
		"climate": "temperate",
		"id": 3,
		"name": "Alderaan",
		"population": "2000000000",
		"residents": 3,
		"terrain": "grasslands, mountains"
	}

	const mockVehicle = {
		"id": 2,
		"model": "T-16 skyhopper",
		"name": "T-16 skyhopper",
		"passengers": "1",
		"vehicle_class": "repulsorcraft"
	}

	beforeEach(() => {

		wrapper = shallow(
			<Card
				addFavorite={mockAddFavorite}
				removeFavorite={mockRemoveFavorite}
				key={0}
				{...mockPerson} 
			/>
		);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('updates the state of the favorited', () => {	
		expect(wrapper.state().favorited).toEqual(false)
		wrapper.instance().handleClick();
		expect(wrapper.state().favorited).toEqual(true)
	});

	it('should call add favorite', () => {
		wrapper.instance().handleClick();
		expect(mockAddFavorite).toHaveBeenCalled()
	});

	it('should call remove favorite', () => {
		wrapper.instance().handleClick();
		expect(mockAddFavorite).toHaveBeenCalled()
		wrapper.instance().handleClick();
		expect(mockRemoveFavorite).toHaveBeenCalled()
	});

	it('should should match snapshot if planet is passed in', () => {
		wrapper = shallow(
			<Card
				addFavorite={mockAddFavorite}
				removeFavorite={mockRemoveFavorite}
				key={0}
				{...mockPlanet} 
			/>
		)
		expect(wrapper).toMatchSnapshot();
	});

	it('should should match snapshot if vehicle is passed in', () => {
		wrapper = shallow(
			<Card
				addFavorite={mockAddFavorite}
				removeFavorite={mockRemoveFavorite}
				key={0}
				{...mockVehicle} 
			/>
		)
		expect(wrapper).toMatchSnapshot();
	});

})