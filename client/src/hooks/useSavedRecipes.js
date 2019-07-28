import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import AuthContext from '../context/auth-context';
/**
 * @hook - useResults - takes in a country argument and returns recipes of that country
 * @param {string} - country - name of country
 * @return {array} - array of recipe objects 
 */
const useSavedRecipes= ()=>{
    const [recipes,setRecipes]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {auth} = useContext(AuthContext)

    useEffect(
        ()=>{

           const fetchRecipes = async ()=>{
               setIsError(false);
               setIsLoading(true);
               try{
                   if(auth){
                    const response = await axios.get(`/api/recipes`);
                    setRecipes(response);
                   }

               }
               catch(error){
                   setIsError(true);
               }
               setIsLoading(false);
           };

           fetchRecipes();
       },
       [auth]     
   );
   //return recipes;
   return [{recipes,isLoading,isError}];

}

export default useSavedRecipes;