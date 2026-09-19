import Link from 'next/link'

const channels = [
  {
    label: 'LinkedIn',
    description: 'Acompanhe minha trajetória profissional e conecte-se comigo.',
    href: 'https://www.linkedin.com/in/henriquebarucco/',
  },
  {
    label: 'GitHub',
    description: 'Veja projetos públicos, experimentos e contribuições.',
    href: 'https://github.com/HenriqueBarucco',
  },
]

export default function Contact() {
  return (
    <section className="flex w-full grow items-center px-5 pb-20 pt-28 sm:px-8 lg:px-12" aria-labelledby="contact-heading">
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <header>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Contato
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" id="contact-heading">
            Vamos conversar.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-base-content/75 sm:text-lg">
            Estou sempre aberto a conversar sobre arquitetura, plataformas de backend e produtos que pedem engenharia confiável.
          </p>
        </header>
        <div className="grid gap-4">
          {channels.map((channel) => (
            <Link
              className="group flex min-h-28 items-center justify-between rounded-2xl border border-base-300 bg-base-200 p-5 transition-colors duration-200 hover:border-primary/50 hover:bg-base-300 sm:p-6"
              href={channel.href}
              key={channel.label}
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <span className="block text-lg font-bold">{channel.label}</span>
                <span className="mt-1 block max-w-md text-sm leading-6 text-base-content/70">
                  {channel.description}
                </span>
              </span>
              <svg
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
