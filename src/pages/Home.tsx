import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'
import Blog from './Blog'
import Projects from './Projects'
import Experience from './Experience'
import Stack from './Stack'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Experience />
      <Stack />
    </>
  )
}