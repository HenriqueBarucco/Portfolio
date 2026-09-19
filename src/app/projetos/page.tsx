import Project from '@/components/project/project'
import { portfolio } from '@/data/portfolio'

export default function Projects() {
  return (
    <section className="w-full grow px-5 pb-20 pt-28 sm:px-8 lg:px-12" aria-labelledby="projects-heading">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-12 max-w-2xl sm:mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Seleção de produtos
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" id="projects-heading">
            Projetos em destaque
          </h1>
          <p className="mt-4 text-base leading-7 text-base-content/75 sm:text-lg">
            Produtos públicos, internos e experimentais que refletem minha atuação em backend, automação e plataformas orientadas a eventos.
          </p>
        </header>
        <div className="space-y-8 sm:space-y-10">
          {portfolio.projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
