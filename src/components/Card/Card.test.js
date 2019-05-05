import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card.js';

describe('Card', () => {
	let wrapper;

	it('should match the snapshot', () => {
		const wrapper = shallow(<Card />);
		expect(wrapper).toMatchSnapshot();
	});

	it('updates the state of the favorited', () => {
		const mockEvent = jest.fn()
		wrapper.setState({favorited: false})
		wrapper.instance().handleClick(mockEvent);
		expect(wrapper.state().favorited).toEqual(true)
	});

	it('should call add favorite', () => {
		const mockEvent = jest.fn()
		wrapper.setState({favorited: true})
		wrapper.instance().handleClick(mockEvent);
		expect(addFavorite).toHaveBeenCalled()
	});

	it('should call remove favorite', () => {
		const mockEvent = jest.fn()
		wrapper.setState({favorited: false})
		wrapper.instance().handleClick(mockEvent);
		expect(addFavorite).toHaveBeenCalled()
	});

})