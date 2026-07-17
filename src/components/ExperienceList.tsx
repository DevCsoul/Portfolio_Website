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
          className="flex flex-col gap-1 border-b border-fg/15 py-4 font-mono text-sm sm:grid sm:grid-cols-[22ch_1fr_auto] sm:items-baseline sm:gap-x-6"
        >
          <span className="text-fg/40">{entry.dates}</span>
          <span className="font-bold text-fg">{entry.role}</span>
          <span className="text-fg/50 sm:text-right">{entry.company}</span>
        </li>
      ))}
    </ul>
  )
}