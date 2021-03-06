import React  from "react";
import useSavedRecipes from "../../hooks/useSavedRecipes";
import LoadSpinner from '../LoadingSpinner/LoadSpinner';
import ResultCards from '../Results/ResultCards';
import "./SavedRecipes.css";

// const recipe = await new Recipe({
//     idMeal: idMeal,
//     strMeal: strMeal,
//     strArea: strArea,
//     _user: req.user.id,
//     strMealThumb:strMealThumb
// });



const SavedRecipes = () => {
  
  const [{ recipes, isLoading, isError }] = useSavedRecipes();
  
  return (
    <div className="SavedRecipes__Wrapper">
      <div className="SavedRecipes__Header">
        <h1 className="SavedRecipes--title">Favorite Recipes</h1>
      </div>
      <div className="SavedRecipes__Favorites">
        {isError && <div className="SavedRecipes--error">Something went wrong ...</div>}
        {isLoading? <LoadSpinner color={"black"} message={"Loading your results"}/> : recipes.data && recipes.data.length?<ResultCards recipes={recipes.data}/>:null}
      </div>
    </div>
  );
};

export default SavedRecipes;
