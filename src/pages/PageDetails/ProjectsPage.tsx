import { Link } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import Footer from '../../components/Footer'

export default function ProjectsPage() {
  return (
    <>
      <PageContainer footer={<Footer minimal />}>
        <Link
          to="/#projects"
          className="font-mono text-sm text-fg/40 transition-colors duration-300 hover:text-orange"
        >
          <i className="fa-solid fa-angle-left"></i> back
        </Link>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-mono text-3xl font-bold text-fg sm:text-4xl">
              Projects<span className="text-orange/50">.</span>
            </h1>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-fg/50 sm:text-base">
              Projects that reflect my skills and approach to building<span className="text-orange/50">.</span>
            </p>
          </div>

          <span className="font-mono text-xs tracking-[0.2em] text-fg/40 uppercase">
            {String(projects.length).padStart(2, '0')} total
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </PageContainer>
    </>
  )
}