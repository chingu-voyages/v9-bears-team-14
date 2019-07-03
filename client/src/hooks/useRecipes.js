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
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

    useEffect(
        ()=>{
           const {supportedCountries}= MAP_CONSTANTS;          //Need to move into useEffect function to avoid ESLINT error https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies 
           const fetchRecipes = async ()=>{
               setIsError(false);
               setIsLoading(true);
               try{
                   if(supportedCountries.hasOwnProperty(country)){
                       const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${supportedCountries[country]}`);
                       setRecipes(response.data.meals);
                   }
               }
               catch(error){
                   setIsError(true);
               }
               setIsLoading(false);
           };

           fetchRecipes();
       },
       [country]     
   );
   //return recipes;
   return [{recipes,isLoading,isError}];

}

export default useRecipes;