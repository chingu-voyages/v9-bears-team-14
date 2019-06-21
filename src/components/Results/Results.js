import React from 'react'
import './Results.css'
import meals from "../../tests/meals"

const Results = (props) => 
            <div >
                <h1 className="Results__Title">{props.countryName} Recipes</h1>
                <div className="Results__Wrapper">
                {meals.map((meal) => 
                    <div key={meal.idMeal} className="Results__Card">
                    <h1  >{meal.menuTitle}</h1>
                    <img className="Results__Image"src={meal.menuTitleThumb} alt={meal.menuTitle}/>
                </div>
                )} 
            </div> 
    </div>

export default Results;