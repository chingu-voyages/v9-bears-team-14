import React from 'react';
import getRecipeInstructions from '../../hooks/getRecipeInstructions'
const Recipe = ({recipeId}) => {
    const [{recipe}] = getRecipeInstructions(recipeId)
    const ingredientList = []
    const keys = Object.keys(recipe)
    const ingredientsKeys = keys.filter(key => 
        key.includes('strIngredient'))
    const amountsKeys = keys.filter(key => 
            key.includes('strMeasure'))
    for (let i = 0; i < ingredientsKeys.length; i++ ){
        ingredientList.push(`${recipe[amountsKeys[i]]}  ${recipe[ingredientsKeys[i]]}`)
    }
    return (
    <div className="Results--wrapper">
        <div className="Results--card">
            <h2>{recipe.strMeal}</h2>
            <h3>Ingredients</h3>
            {ingredientList.map((item, index) => 
                <p key={index}>{item}</p>)}
            <h3>Directions</h3>
            <p>{recipe.strInstructions}</p>
        </div>
    </div>
    )

}
export default Recipe;