import { Link } from 'react-router-dom'

type StackPillsProps = {
  items: string[]
  showMoreLink?: boolean
}

export default function StackPills({ items, showMoreLink = true }: StackPillsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-white/15 px-4 py-2 font-mono text-sm text-white/80 hover:border-white/50"
        >
          {item}
        </span>
      ))}
      {showMoreLink && (
        <Link
          to="/stack"
          className="rounded-md border border-white/30 px-4 py-2 font-mono text-sm text-white/60 transition-colors duration-300 hover:border-white/50 hover:text-white"
        >
          + more
        </Link>
      )}
    </div>
  )
}