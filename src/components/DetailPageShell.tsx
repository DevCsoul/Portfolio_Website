import type { ReactNode } from 'react'
import PageContainer from './PageContainer'
import PageHeader from './PageHeader'

type DetailPageShellProps = {
  title: string
  backTo: string
  subheader?: ReactNode
  children: ReactNode
}

export default function DetailPageShell({ title, backTo, subheader, children }: DetailPageShellProps) {
  return (
    <PageContainer>
      <PageHeader title={title} backTo={backTo} subheader={subheader} />
      {children}
    </PageContainer>
  )
}