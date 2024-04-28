"use client";
import NavigationBar from "./components/NavigationBar";
import HomeComponent from "./components/HomeComponent";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { useRef } from "react";

export default function Home() {
 
  return (
  <div className="">
    <NavigationBar/>
    <HomeComponent/>
    <About/>
    <Projects/>
    </div> 
  );
}
