<<<<<<< HEAD
import React, { useContext } from "react";
import useRecipes from "../../hooks/useRecipes";
import CountryContext from "../../context/country-context";
import MAP_CONSTANTS from "../Map/MapConstants/MAP_CONSTANTS";
import LoadSpinner from '../LoadingModal/LoadSpinner';
import "./Results.css";


const Results = () => {
  const { countrySelected } = useContext(CountryContext);
  const [{recipes,isLoading,isError}] = useRecipes(countrySelected);
  const renderRecipes = ()=>{
        
    return(    <React.Fragment>
                    <h1 className="Results__Title">{MAP_CONSTANTS.supportedCountries[countrySelected]} Recipes</h1>         
                    <div className="Results__Wrapper">
                        {recipes.map((meal) => 
                            <div key={meal.idMeal} className="Results__Card">
                                <h1  >{meal.strMeal}</h1>
                                <img className="Results__Image"src={meal.strMealThumb} alt={meal.strMeal}/>
                            </div>
                        )} 
                    </div>
                </React.Fragment>
            );
}
=======
import React, {useContext} from 'react'
import useRecipes from '../../hooks/useRecipes';
import CountryContext from '../../context/country-context'
import MAP_CONSTANTS from '../Map/MapConstants/MAP_CONSTANTS'
>>>>>>> development

return (
<<<<<<< HEAD
            <div className="Results__Container">
                {isError && <div>Something went wrong ...</div>}
                {isLoading? <LoadSpinner/> : recipes.length?renderRecipes():null}
            </div>
=======
    <div >
        <div className="Results--wrapper">
        
        {countrySelected.length > 0 &&<h1 className="Results--title">{MAP_CONSTANTS.supportedCountries[countrySelected]} Recipes</h1>}         
        </div>
        <div className="Results--wrapper">
            {recipes.map((meal) => 
                <div key={meal.idMeal} className="Results--card ">
                    <h1  >{meal.strMeal}</h1>
                    <img className="Results--image"src={meal.strMealThumb} alt={meal.strMeal}/>
                </div>
            )} 
        </div> 
    </div>
>>>>>>> development
    )
};
export default Results;
