import Image from 'next/image'
import Link from 'next/link'
import LinesEffect from './effects/lines'

type MainProps = {
  name: string
  title: string
  summary: string
}

export default function Main({ name, title, summary }: MainProps) {
  return (
    <section className="relative isolate flex min-h-svh w-full items-center justify-center overflow-hidden px-5 pb-12 pt-24 sm:px-8 lg:px-12">
      <LinesEffect />
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center sm:gap-10">
        <div className="avatar transition-transform duration-300 motion-safe:hover:scale-[1.03]">
          <div className="w-36 rounded-full ring-2 ring-primary ring-offset-4 ring-offset-base-100 sm:w-44">
            <Image
              src="/avatar.jpeg"
              alt="Henrique Barucco"
              width={512}
              height={512}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex max-w-3xl flex-col items-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {name}
          </h1>
          <p className="text-lg font-medium sm:text-xl">{title}</p>
          <p className="max-w-2xl text-base leading-7 text-base-content/75 sm:text-lg sm:leading-8">
            {summary}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/projetos" className="btn btn-primary min-h-12 px-6">
            Ver projetos
          </Link>
          <Link href="/contato" className="btn btn-ghost min-h-12 px-6">
            Entrar em contato
          </Link>
        </div>
      </div>
    </section>
  )
}
