import SkillIcon from './skill-icon';

export default function Skills() {
    return (
        <div className='flex flex-row'>
            <div className='w-1/4 pr-4'>
                <p className='text-1xl font-bold text-end'>HABILIDADES</p>
            </div>
            <div className='flex-1 space-y-2'>
                <SkillIcon language='Java'/>
                <SkillIcon language='Javascript'/>
                <SkillIcon language='Typescript'/>
                <SkillIcon language='Golang'/>
                <SkillIcon language='Python'/>
            </div>
        </div>
    );
}