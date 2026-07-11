type BlogPost = {
  title: string
  excerpt: string
  date: string
}

const posts: BlogPost[] = [
  {
    title: 'A Passion or Nothing.',
    excerpt: 'Ever since I was a child, I envied people who we...',
    date: 'Jul 2026',
  },
  {
    title: 'A Passion or Nothing.',
    excerpt: 'Ever since I was a child, I envied people who we...',
    date: 'Jul 2026',
  },
  {
    title: 'A Passion or Nothing.',
    excerpt: 'Ever since I was a child, I envied people who we...',
    date: 'Jul 2026',
  },
]

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative z-10 w-full scroll-mt-24 bg-[#242424] px-6 pt-20 pb-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4 font-mono text-xs tracking-[0.25em] sm:text-sm">
          <span className="text-white/80">
            <span className="text-orange">02</span>
            <span className="text-white/30">|</span>
            Blog
          </span>
          <a
            href="#blog"
            className="text-white/40 transition-colors duration-300 hover:text-white"
          >
            ALL POST <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>

        {/* Posts */}
        <ul className="mt-2">
          {posts.map((post, i) => (
            <li key={i} className="border-b border-white/15">
              <a href="#" className="group block py-6">
                <div className="flex items-baseline justify-between gap-4 font-mono">
                  <h3 className="text-base text-white transition-colors duration-300 group-hover:text-orange sm:text-lg">
                    {post.title}
                  </h3>
                  <span className="shrink-0 text-xs text-white/50 sm:text-sm">
                    {post.date}
                  </span>
                </div>
                <p className="mt-2 font-mono text-sm text-white/50 sm:text-base">
                  {post.excerpt}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}