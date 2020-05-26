import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import {Albums} from './Albums';

const mockStore = configureMockStore();
const store = mockStore({});
const props= {loading: false, albums:[1,2], error:'error'}

let wrapped = shallow(
    <Provider store={store}>
        <Albums {...props}/>
    </Provider>
)


describe("Albums Component", () => {

    it("Albums should render without throwing an error", () => {
        expect(wrapped.debug()).toMatchSnapshot();
    });
    
    it('Expected props loading as false', () => {
        expect(wrapped.dive().props().loading).toEqual(props.loading)
    });

    it('Expected props albums as [1,2]', () => {
        expect(wrapped.dive().props().albums).toEqual(props.albums)
    });

    it('Expected props error as error message', () => {
        expect(wrapped.dive().props().error).toEqual(props.error)
    });
    
});