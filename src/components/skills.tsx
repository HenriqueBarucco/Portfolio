import SkillIcon from './skill-icon';

export default function Skills() {
    return (
        <div className='flex flex-row'>
            <div className='w-1/4 pr-4'>
                <p className='text-1xl font-bold text-end'>HABILIDADES</p>
            </div>
            <div className='flex-1 space-y-2'>
                <SkillIcon language='Java' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'/>
                <SkillIcon language='Javascript' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'/>
                <SkillIcon language='Typescript' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg'/>
                <SkillIcon language='Golang' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg'/>
                <SkillIcon language='Python' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/>
            </div>
        </div>
    );
}