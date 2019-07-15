 const MAP_CONSTANTS={
    supportedCountries:{      //countries supported by the meals api
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
        "Morocco":"Moroccan",
        "Russia":"Russian",
        "Spain":"Spanish",
        "Thailand":"Thai",
        "Vietnam":"Vietnamese"
    },
    styles:{
        supportedStyled:{
            default: {
                fill: "#32CD32",                  //shade of green
                stroke: "#607D8B",
                strokeWidth: 1,
                outline: "none",
                cursor:"pointer"
              },
              hover: {
                fill: "#FF5722",
                stroke: "#607D8B",
                strokeWidth: 0.75,
                outline: "none",
                cursor:"pointer"
              },
              pressed: {
                fill: "#FF5722",
                stroke: "#607D8B",
                strokeWidth: 0.75,
                outline: "none",
                boxShadow:"0 0 10px #fff",
                cursor:"pointer"
              }
        },
        notSupportedStyled:{
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
              }
        },
      selectedStyled:{
        default:{
          fill: "#FF5722",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none",
          boxShadow:"0 0 10px #fff"
        },
        hover: {
          fill: "#FF5722",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none",
          boxShadow:"0 0 10px #fff"
        },
        pressed: {
          fill: "#FF5722",
          stroke: "#607D8B",
          strokeWidth: 0.75,
          outline: "none",
          boxShadow:"0 0 10px #fff"
        }
      }
    }
}

export default MAP_CONSTANTS;