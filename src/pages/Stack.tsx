import HomeSection from '../components/HomeSection'
import StackPills from '../components/StackPills'
import { stack } from '../data/experience'

export default function Stack() {
  return (
    <HomeSection id="stack" index="05" title="Stack" linkTo="/stack" linkLabel="VIEW ALL">
      <StackPills items={stack} />
    </HomeSection>
  )
}