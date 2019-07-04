import React, {useState,useRef} from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import CountryContext from './context/country-context'
import Preview from './components/Preview/Preview';
import Modal from './components/Modal/Modal';

function App() {
  const [countrySelected, setSelectedCountry] = useState('')
  const [showPreview,setPreview] = useState(false);
  const videoEl = React.createRef();

  const handleClick = e => {
    if (videoEl.current.contains(e.target)) {
      setPreview(true)       // outside click opens preview component
      return;
    }
    
    setPreview(false)       // outside click closes preview component
  };
  return (
      <CountryContext.Provider value={ {countrySelected, setSelectedCountry}} >
        <div className="App">
          <Header/>
          <Map />
          <Results  clicked={setPreview}/>
        </div>
        
        {showPreview && <React.Fragment><Modal/> <Preview ref={videoEl} clicked={handleClick}/></React.Fragment>}
      </CountryContext.Provider>
  );
}

export default App;
