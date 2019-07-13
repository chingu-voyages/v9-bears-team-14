import React, { useState, useEffect } from "react";
import axios from "axios";
import Video from "../Video/Video";
import HeroRecipe from "./HeroRecipe/HeroRecipe";
import ErrorMessage from "../Video/Message/ErrorMessage";
import LoadMessage from "../Video/Message/LoadMessage";
import Ingredients from "./Ingredients/Ingredients";
import { convertYoutubeLink, gatherIngredients } from "../../utils/utils";
import "../Video/_video.scss";
import "./DetailedRecipe.css";
import "./Instructions.css";
const Preview = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstuctions] = useState("");
  useEffect(() => {
    const fetchRecipe = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        if (match.params.previewSelected) {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.previewSelected}`
          );
          if (response.data.meals && response.data.meals.length > 0) {
            setRecipe(response.data.meals[0]);
            setIngredients(gatherIngredients(response.data.meals[0]));
            setInstuctions(response.data.meals[0].strInstructions);
          }
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchRecipe();
  }, [match.params.previewSelected]);

  return (
    <div className="DetailedRecipe__Container">
      {recipe && <HeroRecipe recipe={recipe} />}
      {isError && <ErrorMessage />}
      {isLoading ? (
        <LoadMessage />
      ) : recipe && recipe.strYoutube !== "" ? (
        <Video youtubeLink={convertYoutubeLink(recipe.strYoutube)} />
      ) : (
        <ErrorMessage />
      )}
      <div className="DetailedRecipe__Description">
        <Ingredients ingredients={ingredients} />
        <div className="Description__Instructions">
          <div className="Instructions__Header">
            <h2 className="Instructions--Heading">Instructions</h2>
          </div>
          <div className="Instructions__Wrapper">
            <p className="Instruction--Content">{instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
