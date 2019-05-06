import React from 'react';
import { shallow } from 'enzyme';
import  Scroll  from './Scroll.js';

describe('Scroll', () => {
	let wrapper;

	it('should match the snapshot', () => {
		 wrapper = shallow(<Scroll />);
		expect(wrapper).toMatchSnapshot();
	});

})