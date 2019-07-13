import React, { useState, useEffect } from "react";
import axios from "axios";
import Video from "../Video/Video";
import ErrorMessage from "../Video/Message/ErrorMessage";
import LoadMessage from "../Video/Message/LoadMessage";
import "../Video/_video.scss";
import "./Preview.css";



const Preview = ({ clicked, previewSelected, match }) => {
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
    // cleanup function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", clicked);
      document.removeEventListener("touchend", clicked);
    };
  }, [clicked]);

  // "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
  //     "strTags": "Meat,Casserole",
  //     "strYoutube": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
  //     "strIngredient1": "soy sauce",
  //     "strIngredient2": "water",
  //     "strIngredient3": "brown sugar",
  //     "strIngredient4": "ground ginger",
  //     "strIngredient5": "minced garlic",
  //     "strIngredient6": "cornstarch",
  //     "strIngredient7": "chicken breasts",
  //     "strIngredient8": "stir-fry vegetables",
  //     "strIngredient9": "brown rice",
  //     "strIngredient10": "",
  //     "strIngredient11": "",
  //     "strIngredient12": "",
  //     "strIngredient13": "",
  //     "strIngredient14": "",
  //     "strIngredient15": "",
  //     "strIngredient16": null,
  //     "strIngredient17": null,
  //     "strIngredient18": null,
  //     "strIngredient19": null,
  //     "strIngredient20": null,
  //     "strMeasure1": "3/4 cup",
  //     "strMeasure2": "1/2 cup",
  //     "strMeasure3": "1/4 cup",
  //     "strMeasure4": "1/2 teaspoon",
  //     "strMeasure5": "1/2 teaspoon",
  //     "strMeasure6": "4 Tablespoons",

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
            //console.log(response.data.meals[0])
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
      {recipe && (
        <div
          className="Preview__Header"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.25)) ,url(${
              recipe.strMealThumb
            })`,
            backgroundSize: "cover"
          }}
        >
          {<h1 className="Preview--heading">{recipe.strMeal}</h1>}
        </div>
      )}

      { isError && <ErrorMessage/> }
        {isLoading? <LoadMessage/> : recipe && recipe.strYoutube !== "" ? <Video youtubeLink={convertYoutubeLink(recipe.strYoutube)}/> : <ErrorMessage/> }
      <div className="Preview__Description">
        <div className="Description__Ingredients">
          <ul>
          {ingredients.map((ing,i)=><li key={i}>{ing}</li>)}
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default Preview;
