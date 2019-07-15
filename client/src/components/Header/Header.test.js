import React from 'react';
import Enzyme,{ shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Header from './Header';


Enzyme.configure({adapter:new EnzymeAdapter()});
/* Test user observable behaviour */

describe("Header",()=>{
    it('should render',()=>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('should render with Geo-Foods title', () => {
        const wrapper = shallow(<Header />);
        const h1 = wrapper.find('h1');
        expect(h1.text()).toEqual('Geo Foods');
      });
})

