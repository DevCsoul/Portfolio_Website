import { Link } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import BlogListItem from '../../components/BlogListItem'
import { blogPosts } from '../../data/blog'

export default function BlogPage() {
  return (
    <PageContainer>
      <Link
        to="/#blog"
        className="font-mono text-sm text-white/40 transition-colors duration-300 hover:text-orange"
      >
        <i className="fa-solid fa-angle-left"></i> back
      </Link>

      <h1 className="mt-6 font-mono text-3xl font-bold text-white sm:text-4xl">Blog<span className="text-orange/50">.</span></h1>

      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-white/50 sm:text-base">
        Thoughts, tutorials, and notes on AI, engineering, and building things<span className="text-orange/50">.</span>
      </p>

      <ul className="mt-2">
        {blogPosts.map((post) => (
          <BlogListItem key={post.id} post={post} variant="detailed" />
        ))}
      </ul>
    </PageContainer>
  )
}