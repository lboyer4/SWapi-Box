import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons.js';

describe('Buttons', () => {
	let wrapper;

	const mockSetCategory= jest.fn();
	const mockFavoriteCount = 1;
	const mockEvent = jest.fn()
	const mockTargetName = 'person'

	beforeEach(() => {

		wrapper = shallow(
			<Buttons
			setCategory={mockSetCategory}
			favoriteCount={mockFavoriteCount}
			/> 
		); 
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call set category', () => {
		wrapper.instance().handleClick(mockEvent);
		expect(mockSetCategory).toHaveBeenCalledWith(mockTargetName);
	});
})