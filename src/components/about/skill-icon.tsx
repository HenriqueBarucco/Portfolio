import Image from 'next/image';

export default function SkillIcon({language, img}: {language: string, img: string}) {
    return (
        <div className='flex flex-row space-x-2 align-middle'>
            <Image src={img} alt='java' width={24} height={24} />
            <p className='text-sm font-bold text-center self-center'>{language}</p>
        </div>
    );
}