import type { ProjectEntry } from '../data/projects'

type ProjectCardProps = {
  project: ProjectEntry
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-fg/5 bg-black/4 p-5 transition-colors duration-300 hover:border-fg/15 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {project.image ? (
          <a
            href={project.image}
            target="_blank"
            rel="noreferrer"
            className="group w-full sm:w-1/4 shrink-0 self-stretch overflow-hidden rounded-xl border border-fg/15"
            >
            <div className="h-full aspect-video">
                <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            </a>
        ) : (
          <div
            className="flex aspect-video w-full shrink-0 items-center justify-center rounded-xl sm:aspect-square sm:w-1/4"
            style={{
              backgroundColor: `${project.color}1A`,
              color: project.color,
              border: `1px solid ${project.color}40`,
            }}
          >
            <span className="font-mono text-sm font-bold">{project.initials}</span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-fg/15 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-fg/60 uppercase">
              {project.type}
            </span>
            <span className="rounded-full border border-fg/15 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-fg/40 uppercase">
              {project.dates}
            </span>
          </div>

          <h3 className="mt-2 font-mono text-lg font-bold text-fg sm:text-xl">{project.title}</h3>
          <p className="mt-4 font-mono text-sm leading-relaxed text-fg/60 sm:text-base">{project.summary}</p>
        </div>
      </div>

      <div className="mt-5 border-t border-fg/10 pt-4">
        <p className="font-mono text-[10px] tracking-[0.2em] text-fg/30 uppercase">Built with</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-fg/15 px-2.5 py-1 font-mono text-[11px] text-fg/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}