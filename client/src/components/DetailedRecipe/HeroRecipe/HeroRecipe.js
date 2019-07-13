import React from 'react';
import "./HeroRecipe.css";

const HeroRecipe=(props)=>{
    return(
        <div
          className="Hero__Wrapper"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.25)) ,url(${
              props.recipe.strMealThumb
            })`,
            backgroundSize: "cover"
          }}
        >
          {<h1 className="Hero--heading">{props.recipe.strMeal}</h1>}
        </div>
      )
  }

  export default HeroRecipe;