import React from 'react';
import Enzyme,{mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from './components/Header/Header'
import Map from './components/Map/Map';
import Results from './components/Results/Results';
Enzyme.configure({adapter:new EnzymeAdapter()});

/**
 * 
 * @param {*} props - props of main component
 * @param {*} state - state of main component
 */
const setUp = (props={},state=null)=>{
  return mount(<App {...props}/>)
}

/**
 * 
 * @param {*} wrapper - wrapper for the main component we are testing
 * @param {*} comp - child component we are testing
 * @return {number} - total number of the child component foun d
 */
const findComponentLength =(wrapper,comp)=>{
   const found = wrapper.find(comp);
   return found.length;
}

test('renders App without Error',()=>{
  const  wrapper = setUp();
  expect(wrapper.exists()).toBeTruthy();
});


test('it has a Results component',()=>{
  const  wrapper = setUp();
  expect(findComponentLength(wrapper,Results)).toBe(1);
});