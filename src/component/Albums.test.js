import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Albums from './Albums';

const mockStore = configureMockStore();
const store = mockStore({});

let wrapped = shallow(
    <Provider store={store}>
        <Albums />
    </Provider>
)


describe("Testpage Component", () => {
    
    it("should render without throwing an error", () => {
        expect(wrapped).toMatchSnapshot();
    });
    
});