import React, { useContext, useState } from "react";
import useRecipes from "../../hooks/useRecipes";
import CountryContext from "../../context/country-context";
import MAP_CONSTANTS from "../Map/MapConstants/MAP_CONSTANTS";
import LoadSpinner from '../LoadingSpinner/LoadSpinner';
import Recipe from '../Recipe/Recipe'
import "./_results.scss";

const Results = (props) => {
    const {countrySelected} = useContext(CountryContext)
    const [{recipes,isLoading,isError}] = useRecipes(countrySelected);
    const [recipeId, setRecipeId] = useState(-1)

    const display = (id) => {
        displayPreview(id)
        setRecipeId(id)
    }
    const displayPreview =(id)=>{
        props.clickedModal(prevState=>!prevState)
        props.clickedPreview(id);
    }
    
    const renderRecipes = ()=>{
        return(    <React.Fragment>
                        <div className="Results--Header--title">
                            {countrySelected.length > 0 &&<h1 className="Results--title">{MAP_CONSTANTS.supportedCountries[countrySelected]} Recipes</h1>}      
                        </div>  
                        <div className="Results--wrapper">
                            {recipes.map((meal) => 
                                <div key={meal.idMeal} className="Results--card" id={meal.idMeal} onClick={()=>display(meal.idMeal)}>
                                    <img className="Results--image"src={meal.strMealThumb} alt={meal.strMeal}/>
                                    <div className="after"><h1  className="Results--card--title">{meal.strMeal}</h1></div>
                                </div>
                            )} 
                        </div>
                        {recipeId > 0 && <Recipe recipeId={recipeId}/>}
                    </React.Fragment>
                    
                );
    }
return (
    <div className="Results--container">
        {isError && <div className="Results--error">Something went wrong ...</div>}
        {isLoading? <LoadSpinner color={"black"} message={"Loading your results"}/> : recipes.length?renderRecipes():null}
    </div>
    )
}
export default Results;

