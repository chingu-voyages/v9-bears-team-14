import React,{useEffect} from 'react';
import Preview from '../Preview/Preview';
import getRecipeInstructions from '../../hooks/getRecipeInstructions';
import './DetailedRecipe.css'

//display ingredients , check for nulls and blanks
//display directions, add numbered steps to each sentence
//have button for switching

const DetailedRecipe =React.forwardRef(({clicked,previewSelected}, ref) =>{
    
    const [{recipe}] = getRecipeInstructions(previewSelected)
    const {strInstructions} = recipe;
    //str.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
    
   const createInstructionSteps = (instructs)=>{
       if(instructs && instructs.length ){
        return instructs.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
       }
       return [];
   }
    useEffect(() => {
        // add when mounted
        document.addEventListener('touchend', clicked)
        document.addEventListener("mousedown",clicked);
        // cleanup function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", clicked);
          document.removeEventListener("touchend", clicked);
        };
      }, [clicked]);

    return(
            <div className="DetailedRecipe__Container" ref={ref}>
                {/* <Preview
                    ref={ref}
                    previewSelected={previewSelected}
                    clicked={clicked}
                /> */}
                <div className="DetailedRecipe__Content">
                    <div className="DetailedRecipe--Ingredients">
                        Ingredients
                    </div>
                    <div className="DetailedRecipe--Directions">
                        <ol className="Directions--list">
                            {createInstructionSteps(strInstructions).map((e,i)=><li key={i}>{e}</li>)}
                        </ol>
                    </div>
                </div>
            </div>
    )
});

export default DetailedRecipe;