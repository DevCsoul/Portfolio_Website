type ExperienceEntry = {
  year: string
  role: string
  place: string
}

const experience: ExperienceEntry[] = [
  {
    year: '2026',
    role: 'Full Stack Developer',
    place: 'National Irrigation Administration',
  },
  {
    year: '2026',
    role: 'Frontend/Support Developer',
    place: 'RPH Drughouse',
  },
  {
    year: '2026',
    role: 'Frontend/Support Developer',
    place: 'Airtechno Airconditioning Hub',
  },
  {
    year: '2026',
    role: 'Frontend/Support Developer',
    place: 'HR & Payroll (ACLC)',
  },
]

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Laravel',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
  'PyTorch',
  'Claude Code',
]

export default function Experience() {
  return (
    <section
      id="experiences"
      className="relative z-10 w-full scroll-mt-24 bg-[#242424] px-6 pt-20 pb-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4 font-mono text-xs tracking-[0.25em] sm:text-sm">
          <span className="text-white/80">
            <span className="text-orange">04</span>
            <span className="text-white/30">|</span>
            Experience
          </span>
          <a
            href="#experiences"
            className="text-white/40 transition-colors duration-300 hover:text-white"
          >
            FULL HISTORY <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>

        {/* Roles */}
        <ul className="mt-2 mb-6">
          {experience.map((entry, i) => (
            <li
              key={i}
              className="flex flex-col gap-1 border-b border-white/15 py-4 font-mono text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-white/40">{entry.year}</span>
                <span className="font-bold text-white">{entry.role}</span>
              </div>
              <span className="text-white/50 sm:text-right">{entry.place}</span>
            </li>
          ))}
        </ul>

        <div id="stack" className="flex items-center justify-between gap-4 pb-4 font-mono text-xs tracking-[0.25em] sm:text-sm">
          <span className="text-white/80">
            Stack
          </span>
          <a
            href="#experiences"
            className="text-white/40 transition-colors duration-300 hover:text-white"
          >
            VIEW ALL <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>

          {/* Pills */}
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/15 px-4 py-2 font-mono text-sm text-white/80 hover:border-white/50"
            >
              {item}
            </span>
          ))}
          <a
            href="#stack"
            className="rounded-md border border-white/30 px-4 py-2 font-mono text-sm text-white/60 transition-colors duration-300 hover:border-white/50 hover:text-white"
          >
            + more
          </a>
        </div>
      </div>
    </section>
  )
}