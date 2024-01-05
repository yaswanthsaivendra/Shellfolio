import React, { useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";





function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-white">

      {/* navigation bar  */}
      
      <NavigationBar/>
      <Home/>

      <About/>

      <Projects />
    
    </div>
  )
}

export default App
