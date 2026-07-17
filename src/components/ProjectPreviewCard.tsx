import { Link } from 'react-router-dom'
import type { ProjectEntry } from '../data/projects'

const VISIBLE_TAGS = 3

type ProjectPreviewCardProps = {
  project: ProjectEntry
}

export default function ProjectPreviewCard({ project }: ProjectPreviewCardProps) {
  const visibleTags = project.tags.slice(0, VISIBLE_TAGS)
  const hiddenCount = project.tags.length - visibleTags.length

  return (
    <Link
      to="/projects"
      className="group flex flex-col overflow-hidden rounded-lg border border-fg/5 bg-black/4 transition-colors duration-300 hover:border-fg/15"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-fg/15 bg-black/40">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-xs tracking-[0.2em] text-fg/25 uppercase">
              Preview coming soon
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-mono text-base font-bold text-fg sm:text-lg">{project.title}</h3>
          <span className="shrink-0 font-mono text-[10px] tracking-[0.1em] text-fg/40 uppercase sm:text-xs">
            {project.type}
          </span>
        </div>

        <p className="mt-2 font-mono text-sm leading-relaxed text-fg/50">{project.summary}</p>

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