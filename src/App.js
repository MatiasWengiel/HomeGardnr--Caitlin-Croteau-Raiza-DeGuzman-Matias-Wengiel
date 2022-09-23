
import './App.css';
import Button from './components/Button'
import Banner from './components/Banner'
import PlantCard from './components/PlantCard'
import WeatherCard from './components/WeatherCard';
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navigation from "./components/Navigation";


function App() {
  const [locationKey, setLocationKey] = useState("")
  const location = "winnipeg"
  useEffect(() => {
    axios.get(`/api/location/winnipeg`).then((response) => {
      setLocationKey(response.data)
    })

    console.log(locationKey)
  })

  return (
    <div className="App">
      <Navigation user="Waldo" />
      <h1>The page is empty for now!</h1>
      <Button onClick={() => alert("AAAHHHHHH WHY WOULD YOU CLICK THAT BUTTON?!")}>Except for this button</Button>
      <WeatherCard currentLocation="Winnipeg, MB" localWarnings="wind warning" localHigh="10 C" localLow="5 C" localPrecipitation="10mm" />

    </div>
  );
}

export default App;
