// these are line from enzyme config online
// these are reqd to run a test case contain enzyme
// so we just move these lines into setupTest.js so that
// it will be run before all the test cases 

// import Enzyme from 'enzyme';
// import Adapter from '@cfaester/enzyme-adapter-react-18';

// Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import MyEnzyme from './MyEnzyme';
import React from 'react';

describe('Enzyme test case',()=>{
    test('First test case enzyme',()=>{
        const wrapper = shallow(<MyEnzyme/>)
        // console.log("wrapper = ",wrapper);
        // checking class name
        expect(wrapper.exists('.mytempclass')).toBe(true)
    })
    test('State checking',()=>{
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        
        useStateSpy.mockImplementation((initialState) => [initialState, setState]);
        // console.log("usestatespy = ",useStateSpy.mockReturnValue());
        // const wrapper = shallow(<App />);
        const wrapper = shallow(<MyEnzyme/>)
        const newInputValue = "React is Awesome";
        wrapper
            .find(".input")
            .simulate("change", { target: { value: newInputValue } });
        expect(setState).toHaveBeenCalledWith(newInputValue);
        // expect(wrapper.state()).toEqual({'name':'yogya'}) 
    })
});