import React, { Component } from "react"
import JSONmap from '../../static/world-countries.json';
import axios from 'axios';      //axios is a http promise client tool
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
        selected:null
      }
      this.setCountryName.bind(this);
    }
  
    setCountryName(name){
      console.log(name)
      this.setState({selected:name})
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
                    onClick={()=>this.setCountryName(geography.properties.name)}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
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
  