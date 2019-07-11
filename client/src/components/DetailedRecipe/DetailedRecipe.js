import React, { useState, useEffect } from "react";
import Preview from "../Preview/Preview";
import getRecipeInstructions from "../../hooks/getRecipeInstructions";
import "./DetailedRecipe.css";

//display ingredients , check for nulls and blanks
//display directions, add numbered steps to each sentence
//have button for switching


const DetailedRecipe = React.forwardRef(({ clicked, previewSelected }, ref) => {

  const [{ recipe }] = getRecipeInstructions(previewSelected);
  const { strInstructions } = recipe;



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


  return (
    <div className="DetailedRecipe__Container" ref={ref}>
      {/* <Preview
                    ref={ref}
                    previewSelected={previewSelected}
                    clicked={clicked}
                /> */}
      <div className="DetailedRecipe__Content">
        <div className="DetailedRecipe--Directions">
          <div className="Directions__list">
            {strInstructions}
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailedRecipe;
