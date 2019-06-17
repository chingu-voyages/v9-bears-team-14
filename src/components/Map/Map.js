import React, { Component } from "react"
import axios from 'axios';      //axios is a http promise client tool
import JSONmap from '../../static/world-countries.json';
import "./Map.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

/**This is a hard coded map for what countries "the meal api" supports */
const SUPPORTED={
  "United States of America": "American",
  "United Kingdom": "British",
  "Canada": "Canadian",
  "China": "Chinese",
  "Netherlands":"Dutch",
  "Egypt":"Egyptian",
  "France":"French",
  "Greece":"Greek",
  "India":"Indian",
  "Ireland":"Irish",
  "Italy":"Italian",
  "Jamaica":"Jamaican",
  "Japan":"Japanese",
  "Kenya":"Kenyan",
  "Malaysia":"Malaysian",
  "Mexico":"Mexican",
  "Moroco":"Moroccan",
  "Russia":"Russian",
  "Spain":"Spanish",
  "Thailand":"Thai",
  "Vietnam":"Vietnamese"
}

const SUPPORTED_STYLE={
  default: {
    fill: "#32CD32",
    stroke: "#607D8B",
    strokeWidth: 1,
    outline: "none"
  },
  hover: {
    fill: "#FF5722",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none"
  },
  pressed: {
    fill: "#FF5722",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none",
    boxShadow:"0 0 10px #fff"
  },
}

const NOSUPPORT_STYLE={
  default: {
    fill: "#ECEFF1",        // any country that is NOT-supported will shaded gray
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none"
  },
  hover: {
    fill: "#ECEFF1",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none",
  },
  pressed: {
    fill: "#ECEFF1",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none",
    boxShadow:"0 0 10px #fff"
  },
}

  class Map extends Component {

    constructor(props){
      super(props);
      this.state={
        selected:null,
        loading:false,
        recipes:[]
      }
      
    }
  
    /**
     * @function - isCountrySupported - this function checks if country selected is supported by themealdb api.
     * @param {string} - name - name of country clicked
     * @return {boolean} - true if country is supported by api, false if not supported by api
     */
    isCountrySupported =(name)=>{
      return SUPPORTED.hasOwnProperty(name);
    }
  
    /**
     * @function - getCountryRecipes - this async function sets the country selected based on user's click and performs an async GET request to retrieve selected country's recipes
     * @param {string} - name - name of country clicked
     */
    getCountryRecipes = async (name)=>{
      console.log(name)
      if(this.isCountrySupported(name)){     
        this.setState({selected:name})
        try{
          const response = await axios.get(`/api/countries/${SUPPORTED[name]}`);
          console.log('from the backend: ',response);
          this.setState({recipes:response.data})

        }
        catch(error){
          console.log(error);
        }
      }
      else{
        return;
      }


    }
  
    render() {
      return (
        <div className="Map__Wrapper">
          <ComposableMap
            projectionConfig={{
              scale: 205,
              rotation: [-11,0,0],
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}
            >
            <ZoomableGroup center={[0,20]} disablePanning>
              <Geographies geography={JSONmap}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    name={geography.properties.name}
                    key={i}
                    geography={geography}
                    projection={projection}
                    onClick={()=>this.getCountryRecipes(geography.properties.name)}
                    style={SUPPORTED.hasOwnProperty(geography.properties.name)?SUPPORTED_STYLE:NOSUPPORT_STYLE}
                  ></Geography>
                ))}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      )
    }
  }
  
  export default Map
  