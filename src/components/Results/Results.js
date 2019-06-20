import React from 'react'
import './Results.css'
import meals from "../../tests/meals"

const Results = (props) => 
            <div >
                <h1 className="Results__Title">{props.countryName} Recipes</h1>
                <div className="Results__Wrapper">
                {meals.map((meal) => 
                    <div className="Results__Card">
                    <h1  key={meal.idMeal}>{meal.menuTitle}</h1>
                </div>
                )} 
            </div> 
    </div>

export default Results;