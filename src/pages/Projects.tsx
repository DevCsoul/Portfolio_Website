import HomeSection from '../components/HomeSection'
import ProjectPreviewCard from '../components/ProjectPreviewCard'
import { projects } from '../data/projects'

const RECENT_COUNT = 2

export default function Projects() {
  const recentProjects = projects.slice(0, RECENT_COUNT)

  return (
    <HomeSection id="projects" index="02" title="Projects" linkTo="/projects" linkLabel="ALL PROJECTS">
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {recentProjects.map((project) => (
          <ProjectPreviewCard key={project.id} project={project} />
        ))}
      </div>
    </HomeSection>
  )
}