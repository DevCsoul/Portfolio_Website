import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import PageContainer from '../../components/PageContainer'
import { blogPosts } from '../../data/blog'
import Footer from '../../components/Footer'

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find((p) => p.id === id)
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable or blocked; silently ignore.
    }
  }

  if (!post) {
    return (
      <PageContainer>
        <Link
          to="/blog"
          className="font-mono text-sm text-fg/40 transition-colors duration-300 hover:text-orange"
        >
          <i className="fa-solid fa-angle-left"></i> all posts
        </Link>
        <p className="mt-12 font-mono text-fg/60">This post couldn't be found.</p>
      </PageContainer>
    )
  }

  const paragraphs = post.content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  return (
    <>
    <PageContainer>
      <article>
        <Link
          to="/blog"
          className="font-mono text-sm text-fg/40 transition-colors duration-300 hover:text-orange"
        >
          <i className="fa-solid fa-angle-left"></i> all posts
        </Link>

        <div className="mt-8 font-mono text-xs tracking-[0.15em] text-fg/40 uppercase sm:text-sm">
          {post.date} <span className="text-fg/25">·</span> {post.readTime}
        </div>

        <h1 className="mt-4 font-mono text-3xl leading-tight font-bold text-fg sm:text-4xl">
          {post.title}<span className="text-orange">.</span>
        </h1>

        <p className="mt-4 font-mono text-fg/50 sm:text-lg">{post.excerpt}<span className="text-orange/50">.</span></p>

        <hr className="mt-8 border-fg/15" />

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 max-h-96 w-full rounded-xl object-cover"
        />

        <div className="mt-10 flex flex-col gap-6 font-mono text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-fg/85">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <hr className="mt-10 border-fg/15" />

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-sm text-fg/40">Enjoyed this? Share it around.</span>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 rounded-full border border-fg/15 px-5 py-2.5 font-mono text-sm tracking-wide text-fg/90 transition-colors duration-300 hover:border-orange hover:text-orange"
          >
            {copied ? 'Link copied' : 'Copy link'}
            <i className={copied ? 'fa-solid fa-check' : 'fa-solid fa-link'}></i>
          </button>
        </div>
      </article>
    </PageContainer>
    <Footer />
    </>
  )
}