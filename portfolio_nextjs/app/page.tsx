"use client";
import NavigationBar from "./components/NavigationBar";
import HomeComponent from "./components/HomeComponent";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
 
  return (
  <div className="">
    <NavigationBar/>
    <HomeComponent/>
    <About/>
    <Projects/>
    <WorkExperience />
    </div> 
  );
}
