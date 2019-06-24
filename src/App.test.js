import React from 'react';
import Enzyme,{mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from './components/Header/Header'
import Map from './components/Map/Map';
import Results from './components/Results/Results';
Enzyme.configure({adapter:new EnzymeAdapter()});

test('renders App without Error',()=>{
  const wrapper = mount(<App/>);

  expect(wrapper.find(App).length).toBe(1);
});

test('it has a Header component',()=>{
  const wrapper = mount(<App/>);
  const header = wrapper.find(Header);
  expect(header.length).toBe(1);
});

test('it has a  Map component',()=>{
  const wrapper = mount(<App/>);
  expect(wrapper.find(Map).length).toBe(1);
});

test('it has a Results component',()=>{
  const wrapper = mount(<App/>);
  expect(wrapper.find(Results).length).toBe(1);
});