import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blog'

type BlogListItemProps = {
  post: BlogPost
  variant?: 'compact' | 'detailed' | 'grid'
}

export default function BlogListItem({ post, variant = 'compact' }: BlogListItemProps) {
  if (variant === 'grid') {
    return (
      <li className="overflow-hidden rounded-xl border border-fg/5 bg-black/4 transition-colors duration-300 hover:border-fg/30">
        <Link to={`/blog/${post.id}`} className="group flex h-full flex-col">
          <div className="aspect-video w-full shrink-0 overflow-hidden bg-fg/5">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <span className="font-mono text-xs text-fg/50">{post.date}</span>

            <h3 className="mt-2 font-mono text-sm text-fg/80 transition-colors duration-300 group-hover:text-fg/50 sm:text-base">
              {post.title}
              <span className="text-orange transition-colors duration-300 group-hover:text-orange/50">.</span>
            </h3>

            <p className="mt-2 font-mono text-xs text-fg/50 sm:text-sm">{post.excerpt}</p>

            <div className="mt-3 flex gap-1 font-mono text-xs text-fg/40 sm:text-sm">
              <p className="transition-colors duration-300 group-hover:text-fg/80">Read</p>
              <span>•</span>
              <p>{post.readTime}</p>
            </div>
          </div>
        </Link>
      </li>
    )
  }

  if (variant === 'detailed') {
    return (
      <li className="border-t border-fg/15">
        <Link to={`/blog/${post.id}`} className="group flex flex-col gap-5 py-6 sm:flex-row sm:items-start">
          <div className="w-full shrink-0 overflow-hidden rounded-xl sm:w-42">
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-contain"
            />
          </div>
          <div>
            <span className="font-mono text-xs text-fg/50">{post.date}</span>

            <h3 className="mt-1 font-mono text-sm text-fg/80 transition-colors duration-300 group-hover:text-fg/50 sm:text-base">
              {post.title}
              <span className="text-orange transition-colors duration-300 group-hover:text-orange/50">.</span>
            </h3>

            <p className="mt-1 font-mono text-xs text-fg/50 sm:text-sm">{post.excerpt}</p>

            <div className="mt-1 flex gap-1 font-mono text-xs text-fg/40 sm:text-sm">
              <p className="transition-colors duration-300 group-hover:text-fg/80">Read</p>
              <span>•</span>
              <p>{post.readTime}</p>
            </div>
          </div>
        </Link>
      </li>
    )
  }

  return (
    <li className="border-b border-fg/15">
      <Link to={`/blog/${post.id}`} className="group block py-6">
        <div className="flex items-baseline justify-between gap-4 font-mono">
          <h3 className="text-base text-fg transition-colors duration-300 group-hover:text-orange sm:text-lg">
            {post.title}
          </h3>
          <span className="shrink-0 text-xs text-fg/50 sm:text-sm">{post.date}</span>
        </div>
        <p className="mt-2 font-mono text-sm text-fg/50 sm:text-base">{post.excerpt}</p>
      </Link>
    </li>
  )
}