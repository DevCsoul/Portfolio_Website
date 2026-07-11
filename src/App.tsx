import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Experience />
    </div>
  )
}

export default App