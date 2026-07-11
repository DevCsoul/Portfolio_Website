const paragraphs = [
  "I'm Kurt Audrey D. Montera",
  "I'm a Frontend Developer based in Tacloban City, Leyte, Philippines",
  'I design and develop clean, user-friendly websites that balance simplicity, functionality, and performance',
  "I'm on a journey to becoming a Full Stack Engineer",
]

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full scroll-mt-24 bg-[#242424] px-6 pt-28 pb-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4 font-mono text-xs tracking-[0.25em] sm:text-sm">
          <span className="text-white/80">
            <span className="text-orange">01</span>
            <span className="text-white/30">|</span>
            About
          </span>
          <a
            href="#about"
            className="text-white/40 transition-colors duration-300 hover:text-white"
          >
            KNOW MORE <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>

        {/* Body */}
        <div className="mt-12 flex flex-col gap-8 font-mono text-[clamp(1rem,2.4vw,1.4rem)] leading-relaxed text-white/85 sm:mt-16">
          {paragraphs.map((line, i) => (
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
      </div>
    </section>
  )
}