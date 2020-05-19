import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapped = shallow(<Header />);

describe('Header Component', () => {

    it('should render the Header Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });

    it('includes link to Mission scene', () => {
        expect(wrapped.find('Link').props().to).toBe("/");
    });

    it('renders the Titles of Header', () => {
        expect(wrapped.find('h1').text()).toEqual("Albums");
    });

});