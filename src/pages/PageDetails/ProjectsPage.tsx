import { Link } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'

export default function ProjectsPage() {
  return (
    <PageContainer>
      <Link
        to="/#projects"
        className="font-mono text-sm text-white/40 transition-colors duration-300 hover:text-orange"
      >
        <i className="fa-solid fa-angle-left"></i> back
      </Link>

      <h1 className="mt-6 font-mono text-3xl font-bold text-white sm:text-4xl">Projects<span className="text-orange/50">.</span></h1>

      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-white/50 sm:text-base">
        Websites that I design and built<span className="text-orange/50">.</span>
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="h-48 rounded-lg border border-white/15" />
          <div className="h-48 rounded-lg border border-white/15" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="h-48 rounded-lg border border-white/15" />
          <div className="h-48 rounded-lg border border-white/15" />
          <div className="h-48 rounded-lg border border-white/15" />
        </div>
      </div>
    </PageContainer>
  )
}