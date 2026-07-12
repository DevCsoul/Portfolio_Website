import { Link } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import ExperienceTimeline from '../../components/ExperienceTimeline'
import { experience } from '../../data/experience'

export default function ExperiencePage() {
  return (
    <PageContainer>
      <Link
        to="/#experiences"
        className="font-mono text-sm text-white/40 transition-colors duration-300 hover:text-orange"
      >
        <i className="fa-solid fa-angle-left"></i> back
      </Link>

      <h1 className="mt-6 font-mono text-3xl font-bold text-white sm:text-4xl">Experience<span className="text-orange/50">.</span></h1>

      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-white/50 sm:text-base">
        2+ years building full-stack web applications with the MERN stack, from a digitalized
        local government feedback platform to an HR and payroll management system<span className="text-orange/50">.</span>
      </p>

      <ExperienceTimeline entries={experience} />
    </PageContainer>
  )
}