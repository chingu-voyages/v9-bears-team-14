import React, { useContext } from "react";
import useResults from "../../hooks/useResults";
import CountryContext from "../../context/country-context";
//import Result from "./Result/Result";
import LoadSpinner from "../LoadingSpinner/LoadSpinner";
import MAP_CONSTANTS from "../Map/MapConstants/MAP_CONSTANTS";
import ResultCards from './ResultCards';
import "./Result/Result.css";
import "./_results.scss";

const Results = () => {
  const { countrySelected } = useContext(CountryContext);
  const [{ recipes, isLoading, isError }] = useResults(countrySelected);


  const renderRecipes = () => {
      
    return (
      <React.Fragment>
        <div className="Results--Header--title">
          {countrySelected.length > 0 && (
            <h1 className="Results--title">
              {MAP_CONSTANTS.supportedCountries[countrySelected]} Recipes
            </h1>
          )}
        </div>
        <div className="Results--wrapper">
          <ResultCards recipes={recipes}/>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="Results--container">
      {isError && (
        <div className="Results--error">Something went wrong ...</div>
      )}
      {isLoading ? (
        <LoadSpinner color={"black"} message={"Loading your results"} />
      ) : recipes.length ? (
        renderRecipes()
      ) : null}
    </div>
  );
};
export default Results;
