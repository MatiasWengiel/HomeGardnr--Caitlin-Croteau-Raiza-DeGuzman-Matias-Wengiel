import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>The page is empty for now!</h1>
      <Button
        onClick={() => alert("AAAHHHHHH WHY WOULD YOU CLICK THAT BUTTON?!")}
      >
        Except for this button
      </Button>
    </div>
  );
}

export default App;
