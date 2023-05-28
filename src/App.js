import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import AboutMe from "./screens/AboutMe/AboutMe";
import AboutStudio from "./screens/AboutStudio/AboutStudio";
import ContactUs from "./screens/ContactUs/ContactUs";
import CustomerProcesses from "./screens/CustomerProcesses/CustomerProcesses";
import HeaderVideo from "./screens/HeaderVideo/HeaderVideo";
import NavBar from "./screens/NavBar/NavBar";
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
      <BackToTop />
      <section className="end-page" />
    </div>
  );
}

export default App;
