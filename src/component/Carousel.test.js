import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Carousel from './Carousel';

const mockStore = configureMockStore();
const props= { images: [1,2] }
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Carousel {...props}/>
    </Provider>
)


describe("Albums Component", () => {

    it("Albums should render without throwing an error", () => {
        expect(wrapped.debug()).toMatchSnapshot();
    });
    
    it('Expected props loading as false', () => {
        expect(wrapped.dive().props().images).toEqual(props.images)
    });
    
});