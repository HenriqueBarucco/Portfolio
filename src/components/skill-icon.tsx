import Image from 'next/image';

export default function SkillIcon({language}: {language: string}) {
    return (
        <div className='flex flex-row space-x-2 align-middle'>
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt='java' width={24} height={24} />
            <p className='text-sm font-bold text-center self-center'>{language}</p>
        </div>
    );
}