import type { Experience } from '@/data/portfolio'

export default function Experiences({
  experiences,
}: {
  experiences: readonly Experience[]
}) {
  return (
    <section className="grid gap-5 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-10" aria-labelledby="experience-heading">
      <div>
        <h2
          className="text-sm font-bold uppercase tracking-[0.18em] text-primary lg:text-right"
          id="experience-heading"
        >
          Experiência
        </h2>
      </div>
      <ol className="max-w-3xl space-y-10">
        {experiences.map((experience) => (
          <li className="border-l-2 border-primary/40 pl-5 sm:pl-6" key={experience.company}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <p className="font-bold text-base-content">{experience.company}</p>
                {experience.roles.length === 1 && (
                  <p className="text-sm text-base-content/70">{experience.roles[0]?.role}</p>
                )}
              </div>
              <p className="shrink-0 text-sm text-base-content/60">
                {experience.roles.at(-1)?.startDate} - {experience.roles[0]?.endDate || 'Atual'}
              </p>
            </div>
            {experience.roles.length > 1
              ? (
                <ol className="mt-5 space-y-8 border-l border-base-content/15 pl-5 sm:pl-6">
                  {experience.roles.map((role) => (
                    <li className="relative" key={`${experience.company}-${role.role}`}>
                      <span className="absolute -left-[1.68rem] top-1.5 size-2.5 rounded-full border-2 border-base-100 bg-primary sm:-left-[1.93rem]" />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <p className="font-medium text-base-content">{role.role}</p>
                        <p className="shrink-0 text-sm text-base-content/60">
                          {role.startDate} - {role.endDate || 'Atual'}
                        </p>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-base-content/75">
                        {role.description.map((description) => (
                          <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:size-1 before:rounded-full before:bg-primary" key={description}>
                            {description}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
                )
              : (
                <ul className="mt-4 space-y-2 text-sm leading-6 text-base-content/75">
                  {experience.roles[0]?.description.map((description) => (
                    <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:size-1 before:rounded-full before:bg-primary" key={description}>
                      {description}
                    </li>
                  ))}
                </ul>
                )}
          </li>
        ))}
      </ol>
    </section>
  )
}
