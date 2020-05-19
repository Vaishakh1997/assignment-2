import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapped = shallow(<Header />);

describe('Header Component', () => {

  it('should render the Title Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  
  it('renders the Titles children', () => { 
    expect(wrapped.find('h1').text()).toEqual('Albums');
  });

});