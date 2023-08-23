export default function AboutMe() {
    return (
        <div className='grow max-w-6xl'>
            <div className='flex flex-row p-4 justify-center items-center space-x-8'>
                <p className='text-4xl font-bold min-w-fit self-start'>SOBRE MIM</p>
                <div className='min-w-full'>
                    <p >
                        Sou um Desenvolvedor Full Stack apaixonado por tecnologia com uma habilidade comprovada em trabalhar em equipe, resolução de problemas e comunicação eficaz. Sempre buscando oportunidades para aprimorar minhas habilidades e oferecer soluções inovadoras para atender às expectativas dos clientes. Com uma mentalidade de crescimento constante, eu estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos e habilidades.
                    </p>
                </div>
            </div>
            <div className='flex flex-row p-4 justify-center items-center space-x-8'>
                <p className='text-2xl font-bold self-start'>EXPERIÊNCIAS</p>
                <div className='flex flex-col space-y-6 min-w-full'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row w-full'>
                            <p className='font-bold text-start'>Empresa</p>
                            <p className='grow text-end'>Agosto 2022 - Atual</p>
                        </div>
                        <div>
                            <p className='text-start'>Cargo</p>
                            <p className='text-start'>Descrição</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row w-full'>
                            <p className='font-bold text-start'>Empresa</p>
                            <p className='grow text-end'>Agosto 2022 - Atual</p>
                        </div>
                        <div>
                            <p className='text-start'>Cargo</p>
                            <p className='text-start'>Descrição</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row p-4 justify-center items-center space-x-8'>
                <p className='text-2xl font-bold min-w-fit self-start'>EDUCAÇÃO</p>
                <div className='flex flex-col space-y-6 min-w-full'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row w-full'>
                            <p className='font-bold text-start'>Empresa</p>
                            <p className='grow text-end'>Agosto 2022 - Atual</p>
                        </div>
                        <div>
                            <p className='text-start'>Cargo</p>
                            <p className='text-start'>Descrição</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}