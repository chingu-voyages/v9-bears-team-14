import React from "react";
import { useTrail, animated} from "react-spring";
import { Link } from "react-router-dom";
import {limitRecipeTitle} from '../../utils/utils';
import "./Result/Result.css";
const ResultCards=({recipes})=>{
    const trail = useTrail(
        recipes.length,
        {
          to: { opacity: 1 },
          from: { opacity: 0 }
        },
        [recipes]
      );
    return(
        trail.map(({ ...rest }, index) => (
            <animated.div
              key={recipes[index].idMeal}
              className="Results--card"
              style={rest}
            >
              <img
                className="Results--image"
                src={recipes[index].strMealThumb}
                alt={recipes[index].strMeal}
              />
              <div className="after">
                <h1 className="Results--card--title">
                  <Link to={`/recipe/${recipes[index].idMeal}`} key={recipes[index].idMeal}>
                    {limitRecipeTitle(recipes[index].strMeal)}
                  </Link>
                </h1>
              </div>
            </animated.div>
          ))

    )
}

export default ResultCards;