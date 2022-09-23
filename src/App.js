
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
      <WeatherCard currentLocation="Winnipeg, MB" localWarnings="wind warning" localHigh="10 C" localLow="5 C" localPrecipitation="10mm" />
      <PlantCard picture="https://live.staticflickr.com/1339/1085617988_edc33bce22_z.jpg" plant="tomato" lastWatered="9/23/2022" nextWatering="9/25/2022" waterStatus="watered" />
    </div>
  );
}

export default App;
