import Image from 'next/image'

export default function SkillIcon({
  language,
  img,
}: {
  language: string
  img: string
}) {
  return (
    <div className="flex min-h-11 items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-base-300">
      <Image src={img} alt="" width={24} height={24} aria-hidden="true" />
      <p className="text-sm font-medium">{language}</p>
    </div>
  )
}
