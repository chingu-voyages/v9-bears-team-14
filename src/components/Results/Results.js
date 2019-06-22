import React, {useContext} from 'react'
import './Results.css'
import useRecipes from '../../hooks/useRecipes';
import CountryContext from '../../context/country-context'
import MAP_CONSTANTS from '../Map/MapConstants/MAP_CONSTANTS'

const Results = (props) => {
const {countrySelected} = useContext(CountryContext)
const recipes = useRecipes(countrySelected)
return (
    <div >
        {countrySelected.length > 0 &&<h1 className="Results__Title">{MAP_CONSTANTS.supportedCountries[countrySelected]} Recipes</h1>}         
        <div className="Results__Wrapper">
            {recipes.map((meal) => 
                <div key={meal.idMeal} className="Results__Card">
                    <h1  >{meal.strMeal}</h1>
                    <img className="Results__Image"src={meal.strMealThumb} alt={meal.strMeal}/>
                </div>
            )} 
        </div> 
    </div>
    )
}
export default Results;