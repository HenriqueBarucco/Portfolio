export default function Education() {
    return (
        <div className='flex flex-row'>
            <div className='w-[160px] pr-4'>
                <p className='text-1xl font-bold text-end'>EDUCAÇÃO</p>
            </div>
            <div className='flex-1 space-y-4'>
                <div className='flex flex-col'>
                    <div className='flex flex-row w-full'>
                        <p className='font-bold text-start'>Estácio de Sá</p>
                        <p className='grow text-end'>Fevereiro 2022 - Cursando 4º Semestre</p>
                    </div>
                    <div>
                        <p className='text-start'>Ciências da Computação</p>
                        <p className='text-start'>Estudante do 4º semestre de Ciências da Computação na Estácio de Sá, apaixonado por tecnologia e focado em programação, algoritmos e desenvolvimento de software. Interessado em inteligência artificial, segurança da informação e desenvolvimento web. Participante ativo de projetos acadêmicos, hackathons e competições de programação. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}