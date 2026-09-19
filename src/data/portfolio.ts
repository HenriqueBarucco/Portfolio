export type Skill = {
  name: string
  icon: string
}

export type ExperienceRole = {
  role: string
  startDate: string
  endDate: string | null
  description: readonly string[]
}

export type Experience = {
  company: string
  roles: readonly ExperienceRole[]
}

export type ProjectLink = {
  label: string
  href: string
  kind: 'demo' | 'github' | 'platform' | 'store'
}

export type Project = {
  title: string
  category: string
  description: string
  technologies: readonly string[]
  visibility: 'Público' | 'Em evolução' | 'Privado'
  visual: 'automation' | 'finance' | 'messaging' | 'observability'
  image?: string
  imageAlt?: string
  links: readonly ProjectLink[]
}

export const portfolio = {
  identity: {
    name: 'Henrique Barucco',
    title: 'Desenvolvedor Backend Sênior',
    summary:
      'Construo serviços distribuídos, integrações e plataformas confiáveis para produtos que precisam operar em escala.',
  },
  about: [
    'Sou Desenvolvedor Backend Sênior no Luizalabs, em Ribeirão Preto, SP, atuando na vertical de logística com soluções para distribuição, retirada em loja, endereçamento e demais etapas da malha de entregas.',
    'Trabalho de ponta a ponta: discovery, desenvolvimento, publicação e operação em produção. Meu foco é criar microsserviços resilientes e observáveis, com decisões técnicas alinhadas ao negócio e à evolução contínua dos produtos.',
  ],
  skills: [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'Kotlin',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    },
    {
      name: 'Golang',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    },
    {
      name: 'Typescript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
    },
    {
      name: 'Javascript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    },
    {
      name: 'Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'RabbitMQ',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
    },
    {
      name: 'Kubernetes',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    },
    {
      name: 'Google Cloud',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    },
    {
      name: 'GitLab CI/CD',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    },
  ] satisfies Skill[],
  experiences: [
    {
      company: 'Luizalabs',
      roles: [
        {
          role: 'Desenvolvedor Backend Sênior',
          startDate: 'Novembro de 2025',
          endDate: null,
          description: [
            'Atuação na vertical de logística, em produtos ligados a distribuição para lojas, retirada em loja e endereçamento.',
            'Desenvolvimento e operação de microsserviços com Golang, Java, Kotlin e JavaScript, priorizando resiliência, alta disponibilidade e integração entre sistemas.',
            'Deploy e operação em GCP e Magalu Cloud com Kubernetes, Argo CD e GitLab CI/CD.',
          ],
        },
        {
          role: 'Desenvolvedor Backend Pleno',
          startDate: 'Dezembro de 2023',
          endDate: 'Novembro de 2025',
          description: [
            'Evolução de microsserviços de last mile em Kotlin e Spring Boot, com estratégias de retry, circuit breaker, self-healing e observabilidade.',
            'Construção de serviços Node.js e TypeScript de alto throughput para emissão de etiquetas de postagem.',
            'Responsabilidade pelo ciclo completo das aplicações, incluindo releases em Kubernetes com Argo CD.',
          ],
        },
      ],
    },
    {
      company: 'GVD Soluções Inteligentes',
      roles: [
        {
          role: 'Desenvolvedor Backend Java',
          startDate: 'Agosto de 2022',
          endDate: 'Dezembro de 2023',
          description: [
            'Desenvolvimento e evolução de APIs de integração com Java, Kotlin, Spring Boot e Spring Security.',
            'Atuação em iniciativas de DevOps, padronizando versionamento e entrega contínua com GitLab e Docker.',
            'Participação em integrações de mensageria para WhatsApp e em uma API de processamento de vídeo com Go e ffmpeg.',
          ],
        },
      ],
    },
    {
      company: 'Instituto Espírita Paulo de Tarso',
      roles: [
        {
          role: 'Desenvolvedor Fullstack — Iniciação científica',
          startDate: 'Outubro de 2022',
          endDate: 'Novembro de 2023',
          description: [
            'Desenvolvimento de uma plataforma para organizar o planejamento de aulas e apoiar a gestão pedagógica.',
            'Arquitetura com Spring Boot, React, Material UI e autenticação JWT.',
          ],
        },
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: 'Easy WhatsApp',
      category: 'Mensageria e integrações',
      description:
        'Plataforma multi-tenant orientada a eventos para conectar contas do WhatsApp a aplicações por API REST e RabbitMQ. Inclui autenticação, instâncias com lease, comandos e eventos duráveis, subscribers e agendamento.',
      technologies: ['TypeScript', 'NestJS', 'RabbitMQ', 'MongoDB', 'Redis'],
      visibility: 'Em evolução',
      visual: 'messaging',
      image: '/easy-whatsapp.png',
      imageAlt: 'Tela inicial do Easy WhatsApp para gerenciar conexões e automações',
      links: [
        {
          label: 'API pública',
          href: 'https://github.com/HenriqueBarucco/Easy-WhatsApp-API',
          kind: 'github',
        },
        {
          label: 'Biblioteca JavaScript',
          href: 'https://github.com/HenriqueBarucco/Easy-WhatsApp-Lib',
          kind: 'github',
        },
      ],
    },
    {
      title: 'Continuum',
      category: 'Automação operacional',
      description:
        'Plataforma interna para definir e operar tarefas automatizadas duráveis. Cada tarefa observa um contexto, avalia condições, pode passar por revisão e executa uma ação final rastreável até seu objetivo.',
      technologies: ['Go', 'PostgreSQL', 'RabbitMQ', 'OpenAPI', 'MCP'],
      visibility: 'Privado',
      visual: 'automation',
      image: '/continuum-dashboard-overview.png',
      imageAlt: 'Mock de dashboard do Continuum aguardando captura real',
      links: [],
    },
    {
      title: 'Chronos',
      category: 'Observabilidade e MCP',
      description:
        'Serviço em Go que acompanha o uso do Codex pelo App Server, identifica resets, envia alertas pelo Easy WhatsApp e disponibiliza o snapshot mais recente por um MCP interno.',
      technologies: ['Go', 'SQLite', 'MCP', 'Docker', 'Observabilidade'],
      visibility: 'Privado',
      visual: 'observability',
      links: [],
    },
    {
      title: 'Horizonte',
      category: 'Finanças pessoais',
      description:
        'Aplicação para registrar lançamentos, acompanhar uma projeção financeira de seis meses e operar dados em PostgreSQL. Também expõe um MCP com escopos controlados para automações assistidas.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'MCP'],
      visibility: 'Privado',
      visual: 'finance',
      links: [],
    },
    {
      title: 'Plataforma IEPT',
      category: 'Planejamento educacional',
      description:
        'Plataforma para planejamento pedagógico e gestão de turmas, com indicadores de preenchimento de dias letivos e visualização de planejamentos por período e turma.',
      technologies: ['TypeScript', 'Kotlin', 'Dashboards', 'Planejamento educacional'],
      visibility: 'Privado',
      visual: 'observability',
      image: '/plataforma-iept-dashboard-completo.png',
      imageAlt: 'Dashboard completo da Plataforma IEPT com sidebar e gráficos de planejamentos',
      links: [
        {
          label: 'Abrir plataforma',
          href: 'https://planejamento.iepaulodetarso.org/dashboard',
          kind: 'platform',
        },
        {
          label: 'Repositórios',
          href: 'https://github.com/orgs/Plataforma-IEPT/repositories',
          kind: 'github',
        },
      ],
    },
    {
      title: 'Calcula AI',
      category: 'Aplicativo mobile',
      description:
        'Aplicativo para acompanhar gastos no supermercado enquanto a compra acontece: reconhece etiquetas de preço com IA, atualiza o carrinho em tempo real e permite sessões colaborativas.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Visão computacional', 'Google Play'],
      visibility: 'Público',
      visual: 'finance',
      image: '/calcula-ai-landing.png',
      imageAlt: 'Landing do Calcula AI com a tela de carrinho em tempo real',
      links: [
        {
          label: 'Abrir site',
          href: 'https://calcula-ai.henriquebarucco.com.br/',
          kind: 'demo',
        },
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.henriquebarucco.calculaai',
          kind: 'store',
        },
      ],
    },
  ] satisfies Project[],
} as const
