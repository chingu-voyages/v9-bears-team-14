export const convertYoutubeLink = link => {
    const YTREGEX = /watch\?v=/; //we need to convert the watch endpoint to embed endpoint to use iframe
    const embedYoutube = link.replace(YTREGEX, "embed/");
    return embedYoutube;
  };

  export const gatherIngredients=(recipe)=>{
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