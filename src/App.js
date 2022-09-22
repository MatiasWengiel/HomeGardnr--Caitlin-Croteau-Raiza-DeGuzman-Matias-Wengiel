import './App.css';
import Button from './components/Button'
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
      <h1>The page is empty for now!</h1>
      <Button onClick={() => alert("AAAHHHHHH WHY WOULD YOU CLICK THAT BUTTON?!")}>Except for this button</Button>
      <Banner weatherWarning="Risk of frost overnight" />
    </div>
  );
}

export default App;
