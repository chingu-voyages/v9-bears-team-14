import React from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header/>
          <Map/>
      </div>
    </div>
  );
}

export default App;
