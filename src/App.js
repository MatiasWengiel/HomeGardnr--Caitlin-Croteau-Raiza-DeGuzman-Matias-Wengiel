
import './App.css';
import Button from './components/Button'
import Banner from './components/Banner'
import PlantCard from './components/PlantCard'
import WeatherCard from './components/WeatherCard';
import Navigation from "./components/Navigation";


function App() {

  return (
    <div className="App">
      <Navigation user="Waldo" />
      <WeatherCard currentCity="Winnipeg" currentProvince="MB" />
    </div>
  );
}

export default App;
