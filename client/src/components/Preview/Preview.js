import React, { useState, useEffect } from "react";
import axios from "axios";
import Video from "../Video/Video";
import ErrorMessage from "../Video/Message/ErrorMessage";
import LoadMessage from "../Video/Message/LoadMessage";
import Ingredients from '../Ingredients/Ingredients';
import "../Video/_video.scss";
import "./Preview.css";


const HeroRecipe=(props)=>{
  return(
      <div
        className="Preview__Header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.25)) ,url(${
            props.recipe.strMealThumb
          })`,
          backgroundSize: "cover"
        }}
      >
        {<h1 className="Preview--heading">{props.recipe.strMeal}</h1>}
      </div>
    )
}


const Preview = ({ clicked,match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [ingredients,setIngredients]=useState([]);
  const convertYoutubeLink = link => {
    const YTREGEX = /watch\?v=/; //we need to convert the watch endpoint to embed endpoint to use iframe
    const embedYoutube = link.replace(YTREGEX, "embed/");
    return embedYoutube;
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("touchend", clicked);
    document.addEventListener("mousedown", clicked);
    return () => {                                      // cleanup function to be called when unmounted
      document.removeEventListener("mousedown", clicked);
      document.removeEventListener("touchend", clicked);
    };
  }, [clicked]);


  const gatherIngredients=(recipe)=>{
    const ingredientList = []
    const keys = Object.keys(recipe)
    const ingredientsKeys = keys.filter(key => 
        key.includes('strIngredient'))
    const amountsKeys = keys.filter(key => 
            key.includes('strMeasure'))
    for (let i = 0; i < ingredientsKeys.length; i++ ){
        ingredientList.push(`${recipe[amountsKeys[i]]}  ${recipe[ingredientsKeys[i]]}`)
    }
    return ingredientList;
  }

  useEffect(() => {
    const fetchYTLink = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        if (match.params.previewSelected) {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${
              match.params.previewSelected
            }`
          );
          if (response.data.meals && response.data.meals.length > 0) {
            setRecipe(response.data.meals[0]);
           setIngredients(gatherIngredients(response.data.meals[0]));
          }
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchYTLink();
  }, [match.params.previewSelected]);

  return (
    <div className="Preview__Container">
      {recipe && (<HeroRecipe recipe={recipe}/>)}
      { isError && <ErrorMessage/> }
        {isLoading? <LoadMessage/> : recipe && recipe.strYoutube !== "" ? <Video youtubeLink={convertYoutubeLink(recipe.strYoutube)}/> : <ErrorMessage/> }
      <div className="Preview__Description">
          <Ingredients ingredients={ingredients}/>
      </div> 
    </div>
  );
};

export default Preview;
