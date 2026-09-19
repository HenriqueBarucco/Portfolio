import AboutMe from '@/components/about/about-me'
import Experiences from '@/components/about/experiences'
import Skills from '@/components/about/skills'
import Main from '@/components/main'
import { portfolio } from '@/data/portfolio'

export default async function Home() {
  return (
    <div className="w-full grow">
      <Main {...portfolio.identity} />
      <section
        className="relative z-10 w-full border-y border-base-300 bg-base-200/95 px-5 py-16 backdrop-blur-xl sm:px-8 sm:py-20 lg:px-12"
        id="sobre"
        aria-label="Sobre Henrique Barucco"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <AboutMe about={portfolio.about} />
          <Skills skills={portfolio.skills} />
          <Experiences experiences={portfolio.experiences} />
        </div>
      </section>
    </div>
  )
}
