import type { ReactNode } from 'react'
import SectionHeader from './SectionHeader'

type HomeSectionProps = {
  id: string
  index: string
  title: string
  linkTo: string
  linkLabel: string
  children: ReactNode
  paddingTop?: string
  snap?: boolean
}

export default function HomeSection({
  id,
  index,
  title,
  linkTo,
  linkLabel,
  children,
  paddingTop = 'pt-20',
  snap = false,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className={`relative z-10 w-full bg-surface px-6 ${paddingTop} pb-24 sm:px-10 lg:px-20 ${
        snap ? 'snap-start scroll-mt-0' : 'scroll-mt-24'
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader index={index} title={title} linkTo={linkTo} linkLabel={linkLabel} />
        {children}
      </div>
    </section>
  )
}