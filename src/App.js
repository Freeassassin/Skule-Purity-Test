import skuletile from "./skuletile.png";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${skuletile})`, backgroundRepeat: "all" }}
    >
      <h1>Skule Purity Test</h1>
    </div>
  );
}

export default App;
