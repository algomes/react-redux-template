import * as React from 'react';

import { shallow } from 'enzyme';
import useMyCustomHook from "../useMyCustomHook";

/*
    This test does not complain about useEffect and useState
    because I am using jest-react-hooks-shallow (see setupTests.js)
*/
describe('Test my custom hook', () => {

    function HookWrapper(props) {
        const hook = props.hook ? props.hook() : undefined;
        return <div hook={hook} />;
    }
    
    it('should set init value', () => {
        let wrapper = shallow(<HookWrapper hook={() => useMyCustomHook(10)} />);
        
        let { hook } = wrapper.find('div').props();
        expect(hook).toBe('Is Even');
    });
    it('Should return Odd result', () => {
        let wrapper = shallow(<HookWrapper hook={() => useMyCustomHook(5)} />);
        
        let { hook } = wrapper.find('div').props();
        expect(hook).toBe('Is Odd');
    });
})


