import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar.js';

describe('NavBar', () => {

	it('should match the snapshot', () => {
		const wrapper = shallow(<NavBar />);
		expect(wrapper).toMatchSnapshot();
	});

})