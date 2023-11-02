export default function Experiences() {
    return (
        <div className='flex flex-row'>
            <div className='w-[160px] pr-4'>
                <p className='text-1xl font-bold text-end'>EXPERIÊNCIAS</p>
            </div>
            <div className='flex-1 space-y-4'>
                <div className='flex flex-col'>
                    <div className='flex flex-row w-full'>
                        <p className='font-bold text-start'>GVD Soluções Inteligentes</p>
                        <p className='grow text-end'>Agosto 2022 - Atual</p>
                    </div>
                    <div>
                        <p className='text-start'>Desenvolvedor Backend</p>
                        <ul className="list-disc list-inside text-xs mt-2">
                            <li className="mb-2">Desenvolvimento de APIs em Java com o framework Spring (Spring Boot, Spring Security e Spring Cloud).</li>
                            <li className="mb-2">Integração contínua e entrega contínua (CI/CD) com ferramentas como GitLab.</li>
                            <li className="mb-2">Utilização de Docker para criação de ambientes de desenvolvimento e implantação.</li>
                            <li className="mb-2">Desenvolvimento de aplicações em Node.js.</li>
                            <li className="mb-2">Criação de sistemas de conexão com o WhatsApp para disparo de mensagens.</li>
                            <li className="mb-2">Trabalho em equipes multidisciplinares.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row w-full'>
                        <p className='font-bold text-start'>Instituto Espirita Paulo de Tarso</p>
                        <p className='grow text-end'>Outubro 2022 - Atual</p>
                    </div>
                    <div>
                        <p className='text-start'>Iniciação Científica - Fullstack</p>
                        <ul className="list-disc list-inside text-xs mt-2">
                            <li className="mb-2">Desenvolvimento de plataforma para gerenciamento de Aulas.</li>
                            <li className="mb-2">API desenvolvida com o framework Spring.</li>
                            <li className="mb-2">Frontend desenvolvido com o framework Next JS (React).</li>
                            <li className="mb-2">Ambientes de desenvolvimento e produção utilizando Docker.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}