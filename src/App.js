import "./App.css";
import AboutMe from "./screens/AboutMe/AboutMe";
import AboutStudio from "./screens/AboutStudio/AboutStudio";
import ContactUs from "./screens/ContactUs/ContactUs";
import CustomerProcesses from "./screens/CustomerProcesses/CustomerProcesses";
import HeaderVideo from "./screens/HeaderVideo/HeaderVideo";
import NavBar from "./screens/NavBar/NavBar";
import TrainingPackages from "./screens/TrainingPackages/TrainingPackages";
import CloseForUpdates from "./screens/CloseForUpdates/CloseForUpdates"

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderVideo />
      <AboutMe />
      <CustomerProcesses />
      <CloseForUpdates />
      <AboutStudio />
      <TrainingPackages />
      <ContactUs />
    </div>
  );
}

export default App;
