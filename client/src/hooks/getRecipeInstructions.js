import {useState,useEffect} from 'react';

import axios from 'axios';

/**
 * @hook - getInstructions - takes in an id argument and returns the recipe with that id
 * @param {number} - id - id of recipe
 * @return {object} - recipe object 
 */
const useRecipes= (id)=>{
    const [recipe,setRecipe]= useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

    useEffect(
        ()=>{
           
           const fetchRecipe = async () => {
               setIsError(false);
               setIsLoading(true);
               const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`            
               try{
                   if(id){
                       const response = await axios.get(api);
                       setRecipe(response.data.meals[0]);
                       console.log('api',response.data.meals[0])
                   }
               }
               catch(error){
                   setIsError(true);
               }
               setIsLoading(false);
           } ;

           fetchRecipe();
          
       },
       [id]     
   );
   console.log('Recipe',{recipe})
   //return a recipe;
   return [{recipe,isLoading,isError}];
}

export default useRecipes;