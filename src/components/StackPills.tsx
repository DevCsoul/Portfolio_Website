import { Link } from 'react-router-dom'

type StackPillsProps = {
  items: string[]
  showMoreLink?: boolean
}

export default function StackPills({ items, showMoreLink = true }: StackPillsProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-fg/15 px-4 py-2 font-mono text-sm text-fg/80 hover:border-fg/50"
        >
          {item}
        </span>
      ))}
      {showMoreLink && (
        <Link
          to="/stack"
          className="rounded-md border border-fg/30 px-4 py-2 font-mono text-sm text-fg/60 transition-colors duration-300 hover:border-fg/50 hover:text-fg"
        >
          + more
        </Link>
      )}
    </div>
  )
}