import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe"
import { faCircle } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
            particles:{
              number:{
                value: 30,
                density: {enable: true,value_area: 900}
              },
              shape:{
                type: "circle",
                stroke:{
                  width: 3, color: "#38f9fc"
                }
              }
            }
          }}
      />
      <Navbar/>
      <Header/>
      <AboutMe/>
    </>
  );
}

export default App;
