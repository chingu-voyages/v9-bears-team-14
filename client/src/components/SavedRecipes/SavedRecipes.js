import React from 'react';
import useSavedRecipes from '../../hooks/useSavedRecipes';

const SavedRecipes =(props)=>{
    const [{recipes,isLoading,isError}] = useSavedRecipes();

    
    return(
        <div>
            <h1>Saved Recipes</h1>
            {recipes && console.log(recipes)}
        </div>
    )
}

export default SavedRecipes;