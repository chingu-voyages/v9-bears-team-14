import React, { useContext } from "react";
import "./Results.css";
import useRecipes from "../../hooks/useRecipes";
import CountryContext from "../../context/country-context";
import MAP_CONSTANTS from "../Map/MapConstants/MAP_CONSTANTS";

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

return (
            <div className="Results__Container">
                {isError && <div>Something went wrong ...</div>}
                {isLoading? "Loading": recipes.length?renderRecipes():null}
            </div>
    )
};
export default Results;
