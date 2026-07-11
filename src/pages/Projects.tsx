export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 w-full scroll-mt-24 bg-[#242424] px-6 pt-20 pb-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4 font-mono text-xs tracking-[0.25em] sm:text-sm">
          <span className="text-white/80">
            <span className="text-orange">03</span>
            <span className="text-white/30">|</span>
            Projects
          </span>
          <a
            href="#projects"
            className="text-white/40 transition-colors duration-300 hover:text-white"
          >
            ALL PROJECTS <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>

        {/* Placeholder grid — swap each div for a real project card later */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.25fr_1fr]">
            <div className="h-40 rounded-lg border border-white/15 sm:h-48" />
            <div className="h-40 rounded-lg border border-white/15 sm:h-48" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="h-40 rounded-lg border border-white/15" />
            <div className="h-40 rounded-lg border border-white/15" />
            <div className="h-40 rounded-lg border border-white/15" />
          </div>
        </div>
      </div>
    </section>
  )
}