import type { ExperienceEntry } from '../data/experience'

const VISIBLE_TAGS = 2

type ExperienceTimelineProps = {
  entries: ExperienceEntry[]
}

export default function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <div className="mt-10">
      {entries.map((entry, i) => {
        const visibleTags = entry.tags.slice(0, VISIBLE_TAGS)
        const hiddenCount = entry.tags.length - visibleTags.length
        const isLast = i === entries.length - 1

        return (
          <div key={entry.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/40 font-mono text-xs font-bold text-white">
                {entry.initials}
              </div>
              {!isLast && <div className="mt-2 w-px flex-1 bg-white/15" />}
            </div>

            <div className={isLast ? 'pb-2' : 'pb-10'}>
              <h3 className="font-mono text-base font-bold text-white sm:text-lg">
                {entry.company}
              </h3>
              <p className="mt-1 font-mono text-xs text-white/40">{entry.type}</p>

              <h4 className="mt-4 font-mono text-sm font-bold text-white">{entry.role}</h4>
              <p className="mt-1 font-mono text-xs tracking-[0.1em] text-white/40 uppercase">
                {entry.dates}
              </p>

              <div className="mt-3 flex flex-col gap-2">
                {entry.description.map((paragraph, j) => (
                  <p key={j} className="font-mono text-sm leading-relaxed text-white/60">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {visibleTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
                {hiddenCount > 0 && (
                  <span className="rounded-full border border-dashed border-white/25 px-3 py-1 font-mono text-xs text-white/40">
                    +{hiddenCount} skills
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}