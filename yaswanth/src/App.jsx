import About from './sections/About'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

const App = () => {
  return (
    <div className="bg-bgcolor">
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App