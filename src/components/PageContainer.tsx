import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  /**
   * Optional footer rendered after the content. Sits flush with the bottom
   * of the viewport when content is short (via the flex-1 content area
   * above it), and gets pushed down in normal flow -- never overlapping --
   * when content is taller than the viewport.
   */
  footer?: ReactNode
}

export default function PageContainer({ children, footer }: PageContainerProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-surface">
      <section className="w-full flex-1 px-6 pt-10 pb-10 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl">{children}</div>
      </section>
      {footer}
    </div>
  )
}