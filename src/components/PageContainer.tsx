import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen w-full bg-surface">
      <section className="w-full px-6 pt-10 pb-10 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl">{children}</div>
      </section>
    </div>
  )
}