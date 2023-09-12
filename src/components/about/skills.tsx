import SkillIcon from './skill-icon';

export default function Skills() {
    return (
        <div className='flex flex-row'>
            <div className='w-1/4 pr-4'>
                <p className='text-1xl font-bold text-end'>HABILIDADES</p>
            </div>
            <div className='flex-1'>
                <div className='flex flex-row justify-around'>
                    <div className='space-y-2'>
                        <SkillIcon language='Java' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'/>
                        <SkillIcon language='Javascript' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'/>
                        <SkillIcon language='Typescript' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg'/>
                        <SkillIcon language='Golang' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg'/>
                        <SkillIcon language='Python' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/>
                    </div>
                    <div className='space-y-2'>
                        <SkillIcon language='Spring' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'/>
                        <SkillIcon language='Nest JS' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'/>
                        <SkillIcon language='Next JS' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'/>
                        <SkillIcon language='Socket IO' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg'/>
                    </div>
                    <div className='space-y-2'>
                        <SkillIcon language='Docker' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg'/>
                        <SkillIcon language='Kubernetes' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'/>
                        <SkillIcon language='Azure' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'/>
                        <SkillIcon language='Google Cloud' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'/>
                        <SkillIcon language='Jenkins' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'/>
                    </div>
                </div>
            </div>
        </div>
    );
}