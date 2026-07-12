import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blog'

type BlogListItemProps = {
  post: BlogPost
  variant?: 'compact' | 'detailed'
}

export default function BlogListItem({ post, variant = 'compact' }: BlogListItemProps) {
  if (variant === 'detailed') {
    return (
      <li className="border-t border-white/15">
        <Link to={`/blog/${post.id}`} className="group flex flex-col gap-5 py-6 sm:flex-row sm:items-start">
          <div className="w-full shrink-0 overflow-hidden rounded-xl sm:w-42">
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-contain"
            />
          </div>
          <div>
            <span className="font-mono text-xs text-white/50">{post.date}</span>

            <h3 className="mt-1 font-mono text-sm text-white/80 transition-colors duration-300 group-hover:text-white/50 sm:text-base">
              {post.title}
              <span className="text-orange transition-colors duration-300 group-hover:text-orange/50">.</span>
            </h3>

            <p className="mt-1 font-mono text-xs text-white/50 sm:text-sm">{post.excerpt}</p>

            <div className="mt-1 flex gap-1 font-mono text-xs text-white/40 sm:text-sm">
              <p className="transition-colors duration-300 group-hover:text-white/80">Read</p>
              <span>•</span>
              <p>{post.readTime}</p>
            </div>
          </div>
        </Link>
      </li>
    )
  }

  return (
    <li className="border-b border-white/15">
      <Link to={`/blog/${post.id}`} className="group block py-6">
        <div className="flex items-baseline justify-between gap-4 font-mono">
          <h3 className="text-base text-white transition-colors duration-300 group-hover:text-orange sm:text-lg">
            {post.title}
          </h3>
          <span className="shrink-0 text-xs text-white/50 sm:text-sm">{post.date}</span>
        </div>
        <p className="mt-2 font-mono text-sm text-white/50 sm:text-base">{post.excerpt}</p>
      </Link>
    </li>
  )
}