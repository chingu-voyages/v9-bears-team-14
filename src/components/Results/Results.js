import React from 'react'
import meals from "../../tests/meals"

const Results = (props) => (
            <div>
                <h1>Results for {props.countryName} Menus</h1>
                {meals.map((meal) => 
                    <h1 key={meal.idMeal}>{meal.menuTitle}</h1>)}
            </div>   
)

export default Results;