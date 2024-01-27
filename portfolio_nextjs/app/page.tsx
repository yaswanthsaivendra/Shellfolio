import NavigationBar from "./components/NavigationBar";
import HomeComponent from "./components/HomeComponent";
import About from "./components/About/About";
import Projects from "./components/Projects";


export default function Home() {
  return (
  <div>
    <NavigationBar/>
    <HomeComponent/>
    <About/>
    <Projects/>
    </div> 
  );
}
