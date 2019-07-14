import {useState,useEffect} from 'react';

import axios from 'axios';

/**
 * @hook - useResults - takes in a country argument and returns recipes of that country
 * @param {string} - country - name of country
 * @return {array} - array of recipe objects 
 */
const useResults= ()=>{
    const [recipes,setRecipes]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

    useEffect(
        ()=>{

           const fetchRecipes = async ()=>{
               setIsError(false);
               setIsLoading(true);
               try{
                   
                       const response = await axios.get(`/api/recipes`);
                       setRecipes(response.data.meals);

               }
               catch(error){
                   setIsError(true);
               }
               setIsLoading(false);
           };

           fetchRecipes();
       },
       []     
   );
   //return recipes;
   return [{recipes,isLoading,isError}];

}

export default useResults;