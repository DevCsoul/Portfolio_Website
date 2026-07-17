import SectionHeader from '../components/SectionHeader'
import ExperienceList from '../components/ExperienceList'
import StackPills from '../components/StackPills'
import { experience, stack } from '../data/experience'

export default function ExperienceStack() {
  return (
    <section className="relative z-10 w-full bg-surface px-6 pt-20 pb-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div id="experiences" className="scroll-mt-24">
          <SectionHeader index="04" title="Experience" linkTo="/experience" linkLabel="FULL HISTORY" />
          <ExperienceList entries={experience.slice(0, 3)} />
        </div>

        <div id="stack" className="mt-14 scroll-mt-24">
          <SectionHeader title="Stack" linkTo="/stack" linkLabel="VIEW ALL" border={false} />
          <StackPills items={stack} />
        </div>
      </div>
    </section>
  )
}