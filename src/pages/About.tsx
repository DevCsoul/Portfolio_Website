import HomeSection from '../components/HomeSection'
import { aboutIntro } from '../data/about'

export default function About() {
  return (
    <HomeSection id="about" index="01" title="About" linkTo="/about" linkLabel="KNOW MORE" paddingTop="pt-28" snap>
      <div className="mt-12 flex flex-col gap-8 font-mono text-[clamp(1rem,2.4vw,1.4rem)] leading-relaxed text-fg/85 sm:mt-16">
        {aboutIntro.map((line, i) => (
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
    </HomeSection>
  )
}