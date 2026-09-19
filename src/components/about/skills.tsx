import SkillIcon from './skill-icon'
import type { Skill } from '@/data/portfolio'

export default function Skills({
  skills,
}: {
  skills: readonly Skill[]
}) {
  return (
    <section className="grid gap-5 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-10" aria-labelledby="skills-heading">
      <div>
        <h2
          className="text-sm font-bold uppercase tracking-[0.18em] text-primary lg:text-right"
          id="skills-heading"
        >
          Stack
        </h2>
      </div>
      <div className="grid max-w-3xl grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} language={skill.name} img={skill.icon} />
        ))}
      </div>
    </section>
  )
}
