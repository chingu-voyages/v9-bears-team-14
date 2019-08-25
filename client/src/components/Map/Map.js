import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";
import JSONmap from "../../static/world-countries.json";
import MAP_CONSTANTS from "./MapConstants/MAP_CONSTANTS";
import CountryContext from "../../context/country-context";
import "./Map.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

const Map = () => {
  const { countrySelected, setSelectedCountry } = useContext(CountryContext);
  const { supportedCountries } = MAP_CONSTANTS;
  const {
    supportedStyled,
    notSupportedStyled,
    selectedStyled
  } = MAP_CONSTANTS.styles;

  const getStyles = countryName => {
    if (isValidCountry(countryName) && countryName === countrySelected) {
      return selectedStyled;
    } else if (isValidCountry(countryName)) {
      return supportedStyled;
    } else return notSupportedStyled;
  };

  const isValidCountry = country => {
    return supportedCountries.hasOwnProperty(country);
  };

  const clickHandler = country => {
    if (isValidCountry(country)) {
      setSelectedCountry(country);
    } else {
      return;
    }
  };

  return (
    <div className="Map__Container">
      <div className="Map__Wrapper">
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11, 0, 0]
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            // height: "auto"
                    height: "100%",
        overflow: "hidden"
          }}
        >
          <ZoomableGroup center={[0, 20]} disablePanning>
            <Geographies geography={JSONmap} disableOptimization={true}>
              {(geographies, projection) =>
                geographies.map(
                  (geography, i) =>
                    geography.id !== "ATA" && (
                      <Geography
                        name={
                          isValidCountry(geography.properties.name)
                            ? geography.properties.name
                            : "NOT SUPPORTED"
                        }
                        key={i}
                        geography={geography}
                        projection={projection}
                        data-tip={
                          isValidCountry(geography.properties.name)
                            ? geography.properties.name
                            : "NOT SUPPORTED"
                        }
                        onClick={() => clickHandler(geography.properties.name)}
                        style={getStyles(geography.properties.name)}
                      ></Geography>
                    )
                )
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip />
      </div>
    </div>
  );
};

export default Map;
