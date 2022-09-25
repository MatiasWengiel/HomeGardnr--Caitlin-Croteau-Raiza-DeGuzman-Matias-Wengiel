
import './App.css';
import Button from './components/Button'
import Banner from './components/Banner'
import PlantCard from './components/PlantCard'
import WeatherCard from './components/WeatherCard';
import Navigation from "./components/Navigation";
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  return (
    <div className="App">
      <Navigation user="Waldo" />
      <WeatherCard currentProvince="BC" />
    </div>
  );
}

export default App;
