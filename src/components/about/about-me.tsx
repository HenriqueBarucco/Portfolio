export default function AboutMe({ about }: { about: readonly string[] }) {
  return (
    <section className="grid gap-5 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-10" aria-labelledby="about-heading">
      <div>
        <h2
          className="text-sm font-bold uppercase tracking-[0.18em] text-primary lg:text-right"
          id="about-heading"
        >
          Sobre mim
        </h2>
      </div>
      <div className="max-w-3xl space-y-4 text-base leading-7 text-base-content/80 sm:text-lg sm:leading-8">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
