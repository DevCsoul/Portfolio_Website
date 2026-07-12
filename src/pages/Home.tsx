import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'
import Blog from './Blog'
import Projects from './Projects'
import ExperienceStack from './ExperienceStack'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Projects />
      <ExperienceStack />
      <Footer />
    </>
  )
}