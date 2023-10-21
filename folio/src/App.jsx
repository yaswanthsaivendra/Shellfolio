import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

function App() {

  return (
    <>
      <div className="bg-bgcolor w-full h-screen text-white">
        {/* navigation bar  */}
        <NavigationBar/>

        <main>
          <Home/>
        </main>
      </div>
    </>
  )
}

export default App
