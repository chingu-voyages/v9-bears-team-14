import React, { useContext } from "react";
import useRecipes from "../../hooks/useRecipes";
import CountryContext from "../../context/country-context";
import MAP_CONSTANTS from "../Map/MapConstants/MAP_CONSTANTS";
import LoadSpinner from '../LoadingModal/LoadSpinner';
import "./_results.scss";


const Results = () => {
  const { countrySelected } = useContext(CountryContext);
  const [{recipes,isLoading,isError}] = useRecipes(countrySelected);
  const renderRecipes = ()=>{
        
    return(    <React.Fragment>
                    <h1 className="Results--title">{MAP_CONSTANTS.supportedCountries[countrySelected]} Recipes</h1>         
                    <div className="Results--wrapper">
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

return (
            <div className="Results--wrapper">
                {isError && <div>Something went wrong ...</div>}
                {isLoading? <LoadSpinner/> : recipes.length?renderRecipes():null}
            </div>
    )
};
export default Results;
