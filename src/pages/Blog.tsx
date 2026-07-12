import HomeSection from '../components/HomeSection'
import BlogListItem from '../components/BlogListItem'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <HomeSection id="blog" index="02" title="Blog" linkTo="/blog" linkLabel="ALL POST">
      <ul className="mt-2">
        {blogPosts.map((post) => (
          <BlogListItem key={post.id} post={post} variant="compact" />
        ))}
      </ul>
    </HomeSection>
  )
}