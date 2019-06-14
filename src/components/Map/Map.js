import React, { Component } from "react"
import JSONmap from '../../static/world-countries.json';
import "./Map.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"


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
  