import './App.css';
import Map from './components/map/mapbox/mapbox-container'
import Planner from "./components/planner-panel/planner";

function App() {
  return (
    <div className="App">
      <Map />
      <Planner />
    </div>
  );
}

export default App;
