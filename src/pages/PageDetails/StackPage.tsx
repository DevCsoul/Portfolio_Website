import { Link } from 'react-router-dom'
import PageContainer from '../../components/PageContainer'
import StackPills from '../../components/StackPills'
import { stackCategories } from '../../data/experience'
import Footer from '../../components/Footer'

export default function StackPage() {
  return (
    <>
    <PageContainer>
          <Link
            to="/#stack"
            className="font-mono text-sm text-white/40 transition-colors duration-300 hover:text-orange"
          >
            <i className="fa-solid fa-angle-left"></i> back
          </Link>
    
          <h1 className="mt-6 font-mono text-3xl font-bold text-white sm:text-4xl">Tech Stack<span className="text-orange/50">.</span></h1>
    
          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-white/50 sm:text-base">
            The technologies I trust to build modern web applications<span className="text-orange/50">.</span>
          </p>
    
          <div className="flex flex-col gap-10 mt-10">
          {stackCategories.map((category) => (
            <div key={category.label}>
              <h3 className="font-mono text-xs tracking-[0.25em] text-white/50 uppercase">
                {category.label}
              </h3>
              <StackPills items={category.items} showMoreLink={false} />
            </div>
          ))}
        </div>
        </PageContainer>
        <Footer />
    </>
  )
}