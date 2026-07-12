import { contactEmail, resumeFile, socialLinks } from '../data/contact'

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 w-full scroll-mt-24 bg-[#242424] px-6 pt-10 pb-5 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Top divider */}
        <div className="border-t border-white/10"></div>

        {/* Main contact content */}
        <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="animate-fade-in-up-slow opacity-0">
            <p className="font-mono text-[clamp(1.5rem,4vw,2.5rem)] leading-tight text-white/90">
              Let's build <span className="text-orange">something</span>
              <br />
              great together.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-white/60 transition-colors duration-300 hover:text-orange"
            >
              <i className="fa-solid fa-envelope"></i>
              {contactEmail}
            </a>
          </div>

          <div
            className="flex flex-col items-start gap-5 animate-fade-in-up-slow opacity-0 sm:items-end"
            style={{ animationDelay: '150ms' }}
          >
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-orange hover:text-orange"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>

            {/* Resume download */}
            <a
              href={resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono text-sm tracking-wide text-white/90 transition-colors duration-300 hover:border-orange hover:text-orange"
            >
              Download Resume
              <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex items-center justify-center font-mono text-xs tracking-wide text-white/40">
          <span>&copy; 2026 Kurt Montera.</span>
        </div>
      </div>
    </footer>
  )
}