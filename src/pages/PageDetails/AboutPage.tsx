import { Link } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import { aboutParagraphs } from '../../data/about'

export default function AboutPage() {
  return (
    <PageContainer>
      <Link
        to="/#about"
        className="font-mono text-sm text-white/40 transition-colors duration-300 hover:text-orange"
      >
        <i className="fa-solid fa-angle-left"></i> back
      </Link>

      <h1 className="mt-6 font-mono text-3xl font-bold text-white sm:text-4xl">About<span className="text-orange/50">.</span></h1>

      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-white/50 sm:text-base">
        The Story about how I become a Developer<span className="text-orange/50">.</span>
      </p>

      <div className="mt-12 flex flex-col gap-8 font-mono text-[clamp(1rem,2.4vw,1.4rem)] leading-relaxed text-white/85 sm:mt-16">
        {aboutParagraphs.map((line, i) => (
          <p
            key={line}
            className="animate-fade-in-up-slow opacity-0"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {line}
            <span className="text-orange">.</span>
          </p>
        ))}
      </div>
    </PageContainer>
  )
}