import Project from '@/components/project/project'

export default function Projects() {
  return (
    <div className="grow">
      <div className="flex flex-col items-center justify-start h-full space-y-6 pt-28">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

const projects = [
  {
    title: 'Easy WhatsApp',
    description: `
        Este projeto consiste em um serviço de envio de mensagens utilizando o WhatsApp, no qual o usuário consegue se cadastrar e ter a sua própria instância de WhatsApp para utilizar como quiser, seja pela versão web do projeto Easy-WhatsApp ou pela API para ser integrada em qualquer que seja o projeto.
        O projeto já está em produção e pode ser utilizado por vocÊ agora mesmo! basta acessar o link abaixo e se cadastrar.
        O projeto foi desenvolvido utilizando o framework Nest para o backend e o framework Next JS para o frontend. O banco de dados utilizado foi o MariaDB. O projeto foi desenvolvido utilizando o Docker para facilitar a implantação e o desenvolvimento.
        `,
    image: '/easy-whatsapp.png',
    url: 'https://easy-whatsapp.henriquebarucco.com.br',
    github: 'https://github.com/HenriqueBarucco/Easy-Whatsapp-Frontend',
  },
  {
    title: 'IEPT - Gerenciador de Aulas',
    description: `
        Este projeto foi realizado como Iniciação Cientifica no Instituto Espirita Paulo de Tarso, o projeto consiste em um gerenciador de aulas para o Instituto, onde os professores podem criar o planejamento das aulas.
        Para então seguir o ano letivo seguindo o EBAC.
        Juntamente com esse controle é possível a gestão da escola realizar diversas métricas sobre como está sendo abordados os diferentes campos do conhecimento
        O projeto foi desenvolvido utilizando o framework Spring Boot para o backend e o framework Next JS para o frontend. O banco de dados utilizado foi o MariaDB.
        `,
    image: '/iept.png',
    url: 'https://iept.henriquebarucco.com.br',
    github: null,
  },
]
