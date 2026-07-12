import { Link, useParams } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import { blogPosts } from '../../data/blog'

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <PageContainer>
        <Link
          to="/blog"
          className="font-mono text-sm text-white/40 transition-colors duration-300 hover:text-orange"
        >
          <i className="fa-solid fa-angle-left"></i> all posts
        </Link>
        <p className="mt-12 font-mono text-white/60">This post couldn't be found.</p>
      </PageContainer>
    )
  }

  const paragraphs = post.content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  return (
    <PageContainer>
      <article>
        <Link
          to="/blog"
          className="font-mono text-sm text-white/40 transition-colors duration-300 hover:text-orange"
        >
          <i className="fa-solid fa-angle-left"></i> all posts
        </Link>

        <div className="mt-8 font-mono text-xs tracking-[0.15em] text-white/40 uppercase sm:text-sm">
          {post.date} <span className="text-white/25">·</span> {post.readTime}
        </div>

        <h1 className="mt-4 font-mono text-3xl leading-tight font-bold text-white sm:text-4xl">
          {post.title}
        </h1>

        <p className="mt-4 font-mono text-white/50 sm:text-lg">{post.excerpt}</p>

        <hr className="mt-8 border-white/15" />

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 max-h-96 w-full rounded-xl object-cover"
        />

        <div className="mt-10 flex flex-col gap-6 font-mono text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-white/85">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </PageContainer>
  )
}