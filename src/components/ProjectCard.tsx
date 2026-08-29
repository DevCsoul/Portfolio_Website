import { Link } from 'react-router-dom'
import type { ProjectEntry } from '../data/projects'

const VISIBLE_TAGS = 4

type ProjectCardProps = {
  project: ProjectEntry
  index?: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const visibleTags = project.tags.slice(0, VISIBLE_TAGS)
  const hiddenCount = project.tags.length - visibleTags.length

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-fg/10 bg-black/4 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_16px_40px_-20px_rgba(239,56,1,0.45)]"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-fg/10 bg-black/40">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ backgroundColor: `${project.color}14` }}
          >
            <span className="font-mono text-2xl font-bold" style={{ color: project.color }}>
              {project.initials}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {typeof index === 'number' && (
          <span className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/40 font-mono text-[11px] text-white/80 backdrop-blur-sm">
            {String(index).padStart(2, '0')}
          </span>
        )}

        <span className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-white/80 uppercase backdrop-blur-sm">
          {project.type}
        </span>

        <span className="absolute bottom-3 left-4 flex translate-y-2 items-center gap-1.5 font-mono text-xs tracking-[0.1em] text-white/90 uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View project
          <i className="fa-solid fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1"></i>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-mono text-base font-bold text-fg transition-colors duration-300 group-hover:text-orange sm:text-lg">
            {project.title}
          </h3>
          <span className="shrink-0 pt-0.5 font-mono text-[10px] tracking-[0.1em] text-fg/40 uppercase">
            {project.dates}
          </span>
        </div>

        <p className="mt-1 font-mono text-xs text-fg/40">{project.role}</p>

        <p className="mt-3 font-mono text-sm leading-relaxed text-fg/55">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-fg/15 px-2.5 py-1 font-mono text-[11px] text-fg/60"
            >
              {tag}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="rounded-full border border-dashed border-fg/25 px-2.5 py-1 font-mono text-[11px] text-fg/40">
              +{hiddenCount}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}