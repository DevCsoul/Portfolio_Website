import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  backTo: string
  subheader?: ReactNode
}

export default function PageHeader({ title, backTo, subheader }: PageHeaderProps) {
  return (
    <div>
      <div className="border-b border-white/15 pb-4 font-mono text-xs tracking-[0.25em] text-white/80 sm:text-sm">
        <Link
          to={backTo}
          className="font-mono text-sm text-white/40 transition-colors duration-300 hover:text-orange"
        >
          <i className="fa-solid fa-angle-left"></i> Back
        </Link>
        <span className="p-1 text-white/30">|</span>
        {title}
      </div>

      {subheader && (
        <p className="pt-6 font-mono text-white/50 sm:text-sm">{subheader}</p>
      )}
    </div>
  )
}