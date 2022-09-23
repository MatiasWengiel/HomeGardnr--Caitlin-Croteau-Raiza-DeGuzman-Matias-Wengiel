import './App.css';
import Button from './components/Button'
import Banner from './components/Banner'
import PlantCard from './components/PlantCard'


function App() {
  return (
    <div className="App">
      <h1>The page is empty for now!</h1>
      <Button onClick={() => alert("AAAHHHHHH WHY WOULD YOU CLICK THAT BUTTON?!")}>Except for this button</Button>
      <Banner weatherWarning="Risk of frost overnight" />
      <PlantCard plant="Tomatoes" picture="https://live.staticflickr.com/1339/1085617988_edc33bce22_z.jpg" altText="ripe tomatoes" waterStatus="watered" lastWatered="09/21/2022" nextWatering="09/23/2022" />
    </div>
  );
}

export default App;
