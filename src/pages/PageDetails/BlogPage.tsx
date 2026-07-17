import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageContainer from '../../components/PageContainer'
import BlogListItem from '../../components/BlogListItem'
import { blogPosts } from '../../data/blog'
import Footer from '../../components/Footer'

type BlogLayout = 'column' | 'grid'

const STORAGE_KEY = 'blog-layout'

function getStoredLayout(): BlogLayout {
  if (typeof window === 'undefined') return 'column'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'grid' ? 'grid' : 'column'
}

export default function BlogPage() {
  const [layout, setLayout] = useState<BlogLayout>(getStoredLayout)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, layout)
  }, [layout])

  return (
    <>
    <PageContainer>
      <Link
        to="/#blog"
        className="font-mono text-sm text-fg/40 transition-colors duration-300 hover:text-orange"
      >
        <i className="fa-solid fa-angle-left"></i> back
      </Link>

      <div className="mt-6 flex items-end justify-between gap-4">
        <h1 className="font-mono text-3xl font-bold text-fg sm:text-4xl">Blog<span className="text-orange/50">.</span></h1>

        <div
          role="radiogroup"
          aria-label="Blog layout"
          className="flex shrink-0 items-center gap-0.5 rounded-full border border-fg/15 p-0.5"
        >
          <button
            type="button"
            role="radio"
            aria-checked={layout === 'column'}
            aria-label="Column layout"
            title="Column layout"
            onClick={() => setLayout('column')}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors duration-300 ${
              layout === 'column' ? 'bg-fg/10 text-orange' : 'text-fg/40 hover:text-fg/70'
            }`}
          >
            <i className="fa-solid fa-list"></i>
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={layout === 'grid'}
            aria-label="Grid layout"
            title="Grid layout"
            onClick={() => setLayout('grid')}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors duration-300 ${
              layout === 'grid' ? 'bg-fg/10 text-orange' : 'text-fg/40 hover:text-fg/70'
            }`}
          >
            <i className="fa-solid fa-table-cells-large"></i>
          </button>
        </div>
      </div>

      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-fg/50 sm:text-base">
        Thoughts and insights from my journey in life & tech<span className="text-orange/50">.</span>
      </p>

      <ul className={layout === 'grid' ? 'mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2' : 'mt-2'}>
        {blogPosts.map((post) => (
          <BlogListItem key={post.id} post={post} variant={layout === 'grid' ? 'grid' : 'detailed'} />
        ))}
      </ul>
    </PageContainer>
    <Footer />
    </>
  )
}