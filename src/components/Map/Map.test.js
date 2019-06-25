import React from 'react';
import Enzyme,{ shallow,mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Geographies from '../../../node_modules/react-simple-maps/lib/Geographies';
import Geography from '../../../node_modules/react-simple-maps/lib/Geography';
import Map from './Map';
import * as CountryContext from '../../context/country-context';
import MAP_CONSTANTS from './MapConstants/MAP_CONSTANTS';
Enzyme.configure({adapter:new EnzymeAdapter()});

describe("Map",()=>{
    it(' renders without error ',()=>{
        const contextValues = {countrySelected:""}
        jest                                                    
            .spyOn(CountryContext,'useCountryContext')      //we use jest spy to mock our provider
            .mockImplementation(()=> contextValues);
        const wrapper = shallow(<Map/>);
          
        const div = wrapper.find('div');
        expect(div.hasClass("Map__Wrapper")).toBe(true);
    })

    it('should render 179 countries', () => {

        const wrapper = mount(<Map />);
        const found =wrapper.find(Geographies);
         const countries = found.find(Geography);
        expect(countries.length).toBe(179);

      });

      it('should render the correct # of API supported countries with color "#32CD32" ', () => {
        const TOTAL_SUPPORTED = Object.keys(MAP_CONSTANTS.supportedCountries).length;
        const wrapper = mount(<Map />);
        const found =wrapper.find(Geographies);
        //console.log(found.length);
         const countries = found.find(Geography);

        let count =0;
        for(let i=0;i<countries.length;i++){
            //console.log(countries.get(i));
            if(countries.get(i).props.style.default.fill==="#32CD32"){
                count++;
            }
        }
        expect(count).toBe(TOTAL_SUPPORTED);
      });
});
