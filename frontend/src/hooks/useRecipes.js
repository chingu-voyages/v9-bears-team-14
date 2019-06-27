import {useState,useEffect} from 'react';
import MAP_CONSTANTS from '../components/Map/MapConstants/MAP_CONSTANTS';
import axios from 'axios';

/**
 * @hook - useRecipes - takes in a country argument and returns recipes of that country
 * @param {string} - country - name of country
 * @return {array} - array of recipe objects 
 */
const useRecipes= (country)=>{
    const [recipes,setRecipes]= useState([]);
   
    
    useEffect(
         ()=>{
            const {supportedCountries}= MAP_CONSTANTS;          //Need to move into useEffect function to avoid ESLINT error https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
            ( async country =>{
                if(supportedCountries.hasOwnProperty(country)){
                    const response = await axios.get(`/api/countries/${supportedCountries[country]}`);
                    setRecipes(response.data);
                }       
                return;
            })(country);
        },
        [country]      //empty [] means it works like componentDidMount
    );
    return recipes;
}

export default useRecipes;