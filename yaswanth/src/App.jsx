import About from './sections/About'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
const App = () => {
  return (
    <div className="bg-bgcolor">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App