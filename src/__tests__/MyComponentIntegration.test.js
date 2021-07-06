import * as reactRedux from 'react-redux';

import {mount, shallow} from 'enzyme';

import { AAA } from '../redux/actions/actionTypes';
import MockAdapter from 'axios-mock-adapter';
import MyComponent from '../components/MyComponent';
import React from 'react';
import { act } from "react-dom/test-utils";
import axios from 'axios'; //MOCK FOR AXIOS CALLS
import { myAction } from '../redux/actions/action';
import store from '../redux/store';

/*
    check code coverage
    npm run test -- --coverage --watchAll=false
    open /coverage/lcov-report/index.html to see coverage results
 */

const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
        wrapper.update();
    });
};

// #### MOCK USESELECTOR AND USE DISPATCH ####
const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
const mockDispatchFn = jest.fn()

beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    
    useDispatchMock.mockReturnValue(mockDispatchFn);
    useSelectorMock.mockReturnValue(1);
})
// #### END MOCK USESELECTOR AND USE DISPATCH ####

it('should do something', async () => {

    // #### MOCK USE STATE ####
    /* 
        While enzyme doesn't have a solution for mocking react hooks
        It is recommended to use React.useState in the actual component
        in order to be able to mock it in tests
    */
    const expectedPost = {
        data: [{
            id: 1,
            title: "testTitle",
        }]
    };
   
    const myInitialState = expectedPost.data;
    React.useState = jest.fn().mockReturnValue([myInitialState, {}]);
    // #### END MOCK USE STATE ####

    
    // #### WAIT FOR ASYNC USEEFFECT ####
    /*
        Check metod to see how to use act() and get rid of warning 
     */
    const wrapper  = shallow(<MyComponent />);
    await waitForComponentToPaint(wrapper);
    // #### END WAIT FOR ASYNC USEEFFECT ####
    
    expect(wrapper.find('li').text()).toBe('testTitle');
})
