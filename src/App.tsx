import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/PageDetails/AboutPage'
import BlogPage from './pages/PageDetails/BlogPage'
import BlogPostPage from './pages/PageDetails/BlogPostPage'
import ProjectsPage from './pages/PageDetails/ProjectsPage'
import ExperiencePage from './pages/PageDetails/ExperiencePage'
import StackPage from './pages/PageDetails/StackPage'

function App() {
  return (
    <div className="bg-black">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/stack" element={<StackPage />} />
      </Routes>
    </div>
  )
}

export default App