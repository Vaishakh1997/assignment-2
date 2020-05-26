import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { Photos } from './Photos'

const mockStore = configureMockStore();
const props= {loading: false, photos:[1,2], error:'error'}
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Photos {...props}/>
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
        expect(wrapped.dive().props().photos).toEqual(props.photos)
    });

    it('Expected props error as error message', () => {
        expect(wrapped.dive().props().error).toEqual(props.error)
    });
    
});