// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Experiences({ experiences }: { experiences: any[] }) {
  return (
    <div className="flex flex-row">
      <div className="w-[160px] pr-4">
        <p className="text-1xl font-bold text-end">EXPERIÊNCIAS</p>
      </div>
      <div className="flex-1 space-y-4">
        {experiences.map((experience, index) => (
          <div className="flex flex-col" key={index}>
            <div className="flex flex-row w-full">
              <p className="font-bold text-start">{experience.company}</p>
              <p className="grow text-end">
                {experience.startDate} - {experience.endDate || 'Atual'}
              </p>
            </div>
            <div>
              <p className="text-start">{experience.role}</p>
              <ul className="list-disc list-inside text-xs mt-2">
                {experience.description.map(
                  (description: string, index: number) => (
                    <li className="mb-2" key={index}>
                      {description}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
