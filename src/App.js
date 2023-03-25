import "./App.css";
import AboutMe from "./screens/AboutMe/AboutMe";
import AboutStudio from "./screens/AboutStudio/AboutStudio";
import ContactUs from "./screens/ContactUs/ContactUs";
import CustomerProcesses from "./screens/CustomerProcesses/CustomerProcesses";
import HeaderVideo from "./screens/Home/components/HeaderVideo/HeaderVideo";
import NavBar from "./screens/Home/components/NavBar/NavBar";
import TrainingPackages from "./screens/TrainingPackages/TrainingPackages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderVideo />
      <AboutMe />
      <CustomerProcesses />
      <AboutStudio />
      <TrainingPackages />
      <ContactUs />
    </div>
  );
}

export default App;
