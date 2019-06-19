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
        "Moroco":"Moroccan",
        "Russia":"Russian",
        "Spain":"Spanish",
        "Thailand":"Thai",
        "Vietnam":"Vietnamese"
    },
    styles:{
        supported:{
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
              }
        },
        notSupported:{
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
        fill: "#FF5722",
        stroke: "#607D8B",
        strokeWidth: 0.75,
        outline: "none",
        boxShadow:"0 0 10px #fff"
      }
    }
}

export default MAP_CONSTANTS;