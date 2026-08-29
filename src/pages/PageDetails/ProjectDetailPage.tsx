import { Link, Navigate, useParams } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import Footer from '../../components/Footer'
import { processPrinciple, projects } from '../../data/projects'

type DetailSectionProps = {
  index: string
  title: string
  caption?: string
  children: React.ReactNode
}

function DetailSection({ index, title, caption, children }: DetailSectionProps) {
  return (
    <section className="border-t border-fg/10 py-10 first:border-t-0 first:pt-0 sm:py-12">
      <div className="flex items-baseline gap-3 font-mono text-xs tracking-[0.25em] sm:text-sm">
        <span className="text-orange">{index}</span>
        <span className="text-fg/30">|</span>
        <h2 className="text-fg/90 uppercase">{title}</h2>
      </div>

      {caption && (
        <p className="mt-3 font-mono text-sm text-fg/40 italic">"{caption}"</p>
      )}

      <div className="mt-5">{children}</div>
    </section>
  )
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const { details } = project
  const currentIndex = projects.findIndex((p) => p.id === id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <PageContainer footer={<Footer minimal />}>
        <Link
          to="/projects"
          className="font-mono text-sm text-fg/40 transition-colors duration-300 hover:text-orange"
        >
          <i className="fa-solid fa-angle-left"></i> all projects
        </Link>

        {/* Hero */}
        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-fg/40 uppercase">
          <span className="rounded-full border border-fg/15 px-2.5 py-1">{project.type}</span>
          <span className="rounded-full border border-fg/15 px-2.5 py-1">{project.dates}</span>
          <span className="rounded-full border border-fg/15 px-2.5 py-1">{project.role}</span>
        </div>

        <h1 className="mt-4 font-mono text-3xl font-bold text-fg sm:text-4xl lg:text-5xl">
          {project.title}
          <span className="text-orange/50">.</span>
        </h1>

        <p className="mt-4 font-mono text-sm leading-relaxed text-fg/55 sm:text-base">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-fg/15 px-2.5 py-1 font-mono text-[11px] text-fg/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-fg/10">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover object-top"
            />
          ) : (
            <div
              className="flex aspect-video w-full items-center justify-center"
              style={{ backgroundColor: `${project.color}14` }}
            >
              <span className="font-mono text-3xl font-bold" style={{ color: project.color }}>
                {project.initials}
              </span>
            </div>
          )}
        </div>

        {/* Detail steps */}
        <div className="mt-4">
          <DetailSection index="01" title="Introduction">
            <p className="font-mono text-sm leading-relaxed text-fg/70 sm:text-base">
              {details.introduction}
            </p>
          </DetailSection>

          <DetailSection index="02" title="Problem">
            <div className="border-l-2 border-orange/50 pl-4">
              <p className="font-mono text-sm leading-relaxed text-fg/70 sm:text-base">
                {details.problem}
              </p>
            </div>
          </DetailSection>

          <DetailSection index="03" title="Research">
            <ul className="flex flex-col gap-3">
              {details.research.map((point, i) => (
                <li key={i} className="flex gap-3 font-mono text-sm leading-relaxed text-fg/70 sm:text-base">
                  <i className="fa-solid fa-magnifying-glass mt-1 shrink-0 text-xs text-orange/70"></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection index="04" title="Process" caption={processPrinciple}>
            <div>
              {details.process.map((step, i) => {
                const isLast = i === details.process.length - 1
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fg/20 bg-black/10 font-mono text-xs font-bold text-fg">
                        {i + 1}
                      </div>
                      {!isLast && <div className="mt-2 w-px flex-1 bg-fg/15" />}
                    </div>
                    <p className={`font-mono text-sm leading-relaxed text-fg/70 sm:text-base ${isLast ? 'pb-1' : 'pb-6'}`}>
                      {step}
                    </p>
                  </div>
                )
              })}
            </div>
          </DetailSection>
        </div>

        {/* Next project */}
        <div className="mt-6 border-t border-fg/10 pt-8">
          <Link
            to={`/projects/${nextProject.id}`}
            className="group flex items-center justify-between gap-4 rounded-xl border border-fg/10 bg-black/4 p-5 transition-colors duration-300 hover:border-orange/40 sm:p-6"
          >
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-fg/40 uppercase">Next project</p>
              <h3 className="mt-2 font-mono text-lg font-bold text-fg transition-colors duration-300 group-hover:text-orange sm:text-xl">
                {nextProject.title}
              </h3>
            </div>
            <i className="fa-solid fa-arrow-right text-fg/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange"></i>
          </Link>
        </div>
      </PageContainer>
    </>
  )
}