import { Link } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import Footer from '../../components/Footer'

export default function ProjectsPage() {
  return (
    <>
    <PageContainer>
      <Link
        to="/#projects"
        className="font-mono text-sm text-fg/40 transition-colors duration-300 hover:text-orange"
      >
        <i className="fa-solid fa-angle-left"></i> back
      </Link>

      <h1 className="mt-6 font-mono text-3xl font-bold text-fg sm:text-4xl">
        Projects<span className="text-orange/50">.</span>
      </h1>

      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-fg/50 sm:text-base">
        Projects that reflect my skills and approach to building<span className="text-orange/50">.</span>
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
    <Footer />
    </>
  )
}