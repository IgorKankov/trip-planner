import './App.css';
import Map from './components/map/mapbox/mapbox-container'
import Planner from "./components/planner-panel/planner";
import Navigation from "./components/map/navigation";

function App() {
  return (
    <div className="App">
      <Map />
      <Navigation />
      <Planner />
    </div>
  );
}

export default App;
