import Map from './components/Map';
import './App.css';

function App() {
  const location = {
    lat: 21.694,
    lng: 71.7979,
  };

  const zoomLevel = 8;

  return (
    <div className="App">
      <Map location={location} zoomLevel={zoomLevel} />
    </div>
  );
}

export default App;
