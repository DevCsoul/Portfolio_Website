import type { ExperienceEntry } from '../data/experience'

type ExperienceListProps = {
  entries: ExperienceEntry[]
}

export default function ExperienceList({ entries }: ExperienceListProps) {
  return (
    <ul className="mt-2 mb-6">
      {entries.map((entry) => (
        <li
          key={entry.id}
          className="flex flex-col gap-1 border-b border-white/15 py-4 font-mono text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <div className="flex items-baseline gap-6">
            <span className="text-white/40">{entry.dates}</span>
            <span className="font-bold text-white">{entry.role}</span>
          </div>
          <span className="text-white/50 sm:text-right">{entry.company}</span>
        </li>
      ))}
    </ul>
  )
}