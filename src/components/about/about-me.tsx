export default function AboutMe({ about }: { about: string }) {
  return (
    <div className="flex flex-row">
      <div className="w-[160px] pr-4">
        <p className="text-2xl font-bold text-end">SOBRE MIM</p>
      </div>
      <div className="flex-1">
        <p>{about}</p>
      </div>
    </div>
  )
}
