"use client";
import NavigationBar from "./sections/NavigationBar";
import About from "./sections/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Hero from "./sections/Hero"


export default function Home() {
 
  return (
  <div className="">
    <NavigationBar/>
    <Hero/>
    <About/>
    <Projects/>
    <WorkExperience />
    </div> 
  )
}
