import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = ({meal}) => {

    const limitRecipeTitle = (title, limit = 25) => {
        const newTitle = [];
        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
    
            // return the result
            return `${newTitle.join(' ')} ...`;
        }
        return title;
    }

  return (
    
      <div className="Results--card" id={meal.idMeal}>
        <img
          className="Results--image"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className="after">
          <h1 className="Results--card--title">
          <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal}>{limitRecipeTitle(meal.strMeal)}</Link>
          </h1>
        </div>
      </div >
    
  );
};

export default Result;