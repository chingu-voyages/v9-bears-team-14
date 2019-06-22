import React, {useState} from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import CountryContext from './context/country-context'


function App() {
  const [countrySelected, setSelectedCountry] = useState('')
  return (
      <CountryContext.Provider value={ {countrySelected, setSelectedCountry}} className="App">
          <Header/>
          <Map />
          <Results />
      </CountryContext.Provider>
  );
}

export default App;
