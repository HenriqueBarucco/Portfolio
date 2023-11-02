import AboutMe from '@/components/about/about-me';
import Education from '@/components/about/education';
import Experiences from '@/components/about/experiences';
import Skills from '@/components/about/skills';
import Main from '@/components/main';


export default async function Home() {
    return (
        <div className='grow'>
            <div className='flex flex-col items-center h-full'>
                <Main name={user.name} title={user.title} /> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-bounce w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
                <div className='flex bg-base-200 w-full justify-center items-center py-4'>
                    <div className='flex flex-col w-3/6 justify-center space-y-10' id='sobre'>
                        <AboutMe about={user.aboutMe}/>
                        <Skills/>
                        <Experiences/>
                        <Education/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const user = {
    name: 'Henrique Barucco',
    title: 'Desenvolvedor Fullstack',
    aboutMe: 'Sou um Desenvolvedor Full Stack apaixonado por tecnologia com uma habilidade comprovada em trabalhar em equipe, resolução de problemas e comunicação eficaz. Sempre buscando oportunidades para aprimorar minhas habilidades e oferecer soluções inovadoras para atender às expectativas dos clientes. Com uma mentalidade de crescimento constante, eu estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos e habilidades.',
};