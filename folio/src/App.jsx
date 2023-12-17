import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {

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
