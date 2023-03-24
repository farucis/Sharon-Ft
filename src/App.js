import "./App.css";
import HeaderVideo from "./screens/Home/components/HeaderVideo/HeaderVideo";
import NavBar from "./screens/Home/components/NavBar/NavBar";
import TrainLevales from "./screens/TrainLevales/components/TrainLevales";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderVideo />
      <TrainLevales />
    </div>
  );
}

export default App;
