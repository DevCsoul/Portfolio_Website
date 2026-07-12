import HomeSection from '../components/HomeSection'

export default function Projects() {
  return (
    <HomeSection id="projects" index="03" title="Projects" linkTo="/projects" linkLabel="ALL PROJECTS">
      {/* Placeholder grid — swap each div for a real project card later */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.25fr_1fr]">
          <div className="h-40 rounded-lg border border-white/15 sm:h-48" />
          <div className="h-40 rounded-lg border border-white/15 sm:h-48" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="h-40 rounded-lg border border-white/15" />
          <div className="h-40 rounded-lg border border-white/15" />
          <div className="h-40 rounded-lg border border-white/15" />
        </div>
      </div>
    </HomeSection>
  )
}