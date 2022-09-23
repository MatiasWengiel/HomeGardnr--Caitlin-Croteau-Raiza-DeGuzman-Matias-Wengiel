
import "./App.css";
import Button from "./components/Button";
import Navigation from "./components/Navigation";
import PlantForm from "./components/PlantForm";


function App() {
  return (
    <div className="App">
      <Navigation user="Waldo" />
      <h1>The page is empty for now!</h1>

      <Button
        onClick={() => alert("AAAHHHHHH WHY WOULD YOU CLICK THAT BUTTON?!")}
      >
        Except for this button
      </Button>
      <PlantForm />

    </div>
  );
}

export default App;
