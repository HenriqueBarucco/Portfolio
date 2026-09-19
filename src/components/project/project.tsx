import Image from 'next/image'
import Link from 'next/link'
import type { Project as ProjectData } from '@/data/portfolio'

function ProjectVisual({ project }: { project: ProjectData }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt || `Prévia do projeto ${project.title}`}
        fill
        sizes="(min-width: 1024px) 72rem, 100vw"
        className="object-contain bg-base-100"
      />
    )
  }

  const visualContent = {
    automation: (
      <div className="w-full max-w-xs space-y-3">
        <p className="font-mono text-xs text-primary">task.pipeline</p>
        {['observa', 'avalia', 'age'].map((step, index) => (
          <div className="flex items-center gap-3" key={step}>
            <span className="flex size-7 items-center justify-center rounded-full border border-primary/50 text-xs text-primary">
              0{index + 1}
            </span>
            <span className="h-px flex-1 bg-primary/40" />
            <span className="font-mono text-sm">{step}</span>
          </div>
        ))}
      </div>
    ),
    finance: (
      <div className="w-full max-w-sm rounded-2xl border border-base-content/10 bg-base-100 p-5 shadow-xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-content">
              H
            </span>
            Horizonte
          </div>
          <span className="rounded-full bg-warning/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-warning">
            Dados demonstrativos
          </span>
        </div>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-base-content/55">
          Projeção mensal
        </p>
        <div className="mt-3 rounded-xl bg-base-200 p-4">
          <p className="text-xs text-base-content/60">Saldo projetado</p>
          <p className="mt-1 text-2xl font-bold tracking-tight">R$ 1.280,00</p>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-base-content/10 pt-3 text-xs">
            <div>
              <p className="text-base-content/55">Entradas</p>
              <p className="mt-1 font-semibold text-success">R$ 5.400,00</p>
            </div>
            <div>
              <p className="text-base-content/55">Comprometido</p>
              <p className="mt-1 font-semibold">R$ 4.120,00</p>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-xs">
          {[
            ['Moradia', 'R$ 1.700,00'],
            ['Mercado', 'R$ 820,00'],
            ['Reserva', 'R$ 1.600,00'],
          ].map(([category, value]) => (
            <div className="flex items-center justify-between" key={category}>
              <span className="text-base-content/60">{category}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    messaging: (
      <div className="grid w-full max-w-xs grid-cols-2 gap-3 font-mono text-xs">
        <span className="rounded border border-primary/50 bg-primary/10 p-4">instance</span>
        <span className="rounded border border-primary/50 bg-primary/10 p-4">event</span>
        <span className="rounded border border-primary/50 bg-primary/10 p-4">queue</span>
        <span className="rounded border border-primary/50 bg-primary/10 p-4">subscriber</span>
      </div>
    ),
    observability: (
      <div className="w-full max-w-xs space-y-5">
        <div className="flex items-center justify-between font-mono text-xs text-primary">
          <span>usage.snapshot</span>
          <span>live</span>
        </div>
        <div className="grid grid-cols-10 items-end gap-1">
          {[18, 30, 25, 48, 43, 62, 55, 79, 70, 91].map((height, index) => (
            <span className="rounded-sm bg-primary/70" key={index} style={{ height: `${height}px` }} />
          ))}
        </div>
        <div className="h-px bg-primary/40" />
      </div>
    ),
  }[project.visual]

  return (
    <div
      className="flex h-full min-h-64 items-center justify-center bg-base-300 px-8 py-10 text-base-content"
      role="img"
      aria-label={`Visual conceitual do projeto ${project.title}`}
    >
      <div aria-hidden="true">{visualContent}</div>
    </div>
  )
}

export default function Project({ project }: { project: ProjectData }) {
  const visualClassName = 'relative aspect-[16/10] border-b border-base-300 bg-base-300'

  return (
    <article className="group overflow-hidden rounded-2xl border border-base-300 bg-base-200">
      <div className={visualClassName}>
        <ProjectVisual project={project} />
      </div>
      <div className="flex min-w-0 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {project.category}
          </p>
          <span className="rounded-full border border-base-content/15 px-3 py-1 text-xs font-medium text-base-content/70">
            {project.visibility}
          </span>
        </div>
        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-base-content/75">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologias usadas em ${project.title}`}>
          {project.technologies.map((technology) => (
            <li className="rounded-full bg-base-300 px-3 py-1 text-xs font-medium text-base-content/75" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.links.length > 0
            ? project.links.map((link) => (
              <Link
                className="btn btn-sm btn-outline min-h-11 px-4"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </Link>
              ))
            : (
              <Link className="text-sm font-medium text-primary underline-offset-4 hover:underline" href="/contato">
                Detalhes técnicos sob demanda
              </Link>
              )}
        </div>
      </div>
    </article>
  )
}
