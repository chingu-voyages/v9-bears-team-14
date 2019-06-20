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
    const {supportedCountries}= MAP_CONSTANTS;
    
    useEffect(
         ()=>{
            ( async country =>{       
                const response = await axios.get(`/api/countries/${supportedCountries[country]}`);
                setRecipes(response.data);
            })(country);
        },
        [country]      //empty [] means it works like componentDidMount
    );
    return recipes;
}

export default useRecipes;