import { Link } from 'react-router-dom'

type SectionHeaderProps = {
  index?: string
  title: string
  linkTo: string
  linkLabel: string
  border?: boolean
}

export default function SectionHeader({ index, title, linkTo, linkLabel, border = true }: SectionHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 font-mono text-xs tracking-[0.25em] sm:text-sm ${
        border ? 'border-b border-fg/15 pb-4' : ''
      }`}
    >
      <span className="text-fg/80">
        {index && (
          <>
            <span className="text-orange">{index}</span>
            <span className="text-fg/30">|</span>
          </>
        )}
        {title}
      </span>
      <Link to={linkTo} className="text-fg/40 transition-colors duration-300 hover:text-fg">
        {linkLabel} <i className="fa-solid fa-angle-right"></i>
      </Link>
    </div>
  )
}