import DetailPageShell from '../../components/DetailPageShell'
import StackPills from '../../components/StackPills'
import { stack } from '../../data/experience'

export default function StackPage() {
  return (
    <DetailPageShell title="Stack" backTo="/#stack">
      <StackPills items={stack} showMoreLink={false} />
    </DetailPageShell>
  )
}