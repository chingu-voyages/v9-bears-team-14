import React, {useContext} from 'react'
import useRecipes from '../../hooks/useRecipes';
import CountryContext from '../../context/country-context'
import MAP_CONSTANTS from '../Map/MapConstants/MAP_CONSTANTS'

const Results = (props) => {
const {countrySelected} = useContext(CountryContext)
const recipes = useRecipes(countrySelected)
return (
    <div className="Results--container">
        <div className="Results--wrapper">
            {countrySelected.length > 0 &&<h1 className="Results--title">{MAP_CONSTANTS.supportedCountries[countrySelected]} Recipes</h1>}         
        </div>
        <div className="Results--wrapper">
            {recipes.map((meal) => 
                <div key={meal.idMeal} className="Results--card">
                    <h1  className="Results--card--title">{meal.strMeal}</h1>
                    <img className="Results--image"src={meal.strMealThumb} alt={meal.strMeal}/>
                </div>
            )} 
        </div> 
    </div>
    )
}
export default Results;