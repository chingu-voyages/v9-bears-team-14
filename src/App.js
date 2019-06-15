import React from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Results from './components/Results/Results';


function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header/>
          <Map/>
          <Results countryName={'Canadian'}/>
      </div>
    </div>
  );
}

export default App;
