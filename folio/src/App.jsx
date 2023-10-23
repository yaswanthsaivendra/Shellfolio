import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {

  return (
    <div className="bg-bgcolor text-white">

      {/* navigation bar  */}
      <NavigationBar/>
      <Home/>
      <Projects />
    
    </div>
  )
}

export default App
