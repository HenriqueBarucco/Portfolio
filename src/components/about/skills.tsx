import SkillIcon from './skill-icon'

export default function Skills({
  skills,
}: {
  skills: { name: string; icon: string }[]
}) {
  return (
    <div className="flex flex-row">
      <div className="w-[160px] pr-4">
        <p className="text-1xl font-bold text-end">HABILIDADES</p>
      </div>
      <div className="flex-1">
        <div className="flex flex-row justify-around">
          <div className="grid grid-cols-5 grid-rows-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="col-span-1 row-span-1">
                <SkillIcon language={skill.name} img={skill.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
