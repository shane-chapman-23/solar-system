import { useState } from 'react';
import './App.css';
import planetData from './planetData.js';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Solar System</h1>
      </header>
      <div className="Main-body">
        <nav className="Planet-list">
          <ul>
            {planetData.map((planet) => {
              return <li key={planet.name} onClick={() => handlePlanetClick(planet)}>
                {planet.name}
              </li>
            })}
          </ul>
        </nav>
          {selectedPlanet && (
            <div className="Planet-display">
              <h2>{selectedPlanet.name}</h2>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
