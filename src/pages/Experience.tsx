import HomeSection from '../components/HomeSection'
import ExperienceList from '../components/ExperienceList'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <HomeSection id="experiences" index="04" title="Experience" linkTo="/experience" linkLabel="FULL HISTORY">
      <ExperienceList entries={experience} />
    </HomeSection>
  )
}