import React from 'react';
import "./Ingredients.css";
const Ingredients =(props)=>{
    return(
      <div className="Description__Ingredients">
        <div className="Ingredients__Header">
            <h2 className="Ingredients--Heading">Ingredients</h2>
        </div>
        <ul className="Ingredients__List">
            {props.ingredients.map((ing,i)=><li className="Ingredient--Item" key={i}>{ing}</li>)}
        </ul>
    </div>
    )
  }

  export default Ingredients;