import type { IPersonalProject } from "../interfaces/IPersonalProject"

const personalProjects: IPersonalProject[] = [
    {
        icon: 'palette',
        title: 'Material You Components',
        description: 'Biblioteca de componentes React que replica o design system Material You.',
        status: 'planned',
        tags: ['React', 'TypeScript', 'Storybook', 'Jest', 'NPM']
    },
    {
        icon: 'hub',
        link: 'https://project-react-microfrontend-host.vercel.app',
        title: 'React Microfrontend',
        description: 'Shell em Next.js que carrega microfrontends React em runtime, com contrato de montagem versionado, troca de tema e log dos eventos emitidos pelos remotes.',
        status: 'concluded',
        tags: ['Next.js', 'React', 'TypeScript', 'Microfrontends', 'shadcn/ui', 'Zustand']
    },
    {
        icon: 'newspaper',
        repository: 'https://github.com/DiguinhoLNS/project-news-dashboard',
        title: 'News Dashboard',
        description: 'Pipeline de notícias que extrai conteúdo de links, gera matérias com IA e publica automaticamente no WordPress, com dashboard para acompanhar e reprocessar os jobs.',
        status: 'concluded',
        tags: ['Next.js', 'NestJS', 'PostgreSQL', 'BullMQ', 'Gemini', 'WordPress']
    },
    {
        icon: 'savings',
        title: 'Quem me Deve Web',
        description: 'Aplicação web para gerenciar cobranças pessoais, acompanhar devedores e gerar pagamentos via Pix.',
        status: 'development',
        tags: ['Next.js', 'NestJS', 'PostgreSQL']
    },
    {
        icon: 'view_kanban',
        link: 'https://project-board-web-ten.vercel.app',
        title: 'Board',
        description: 'Plataforma para gerenciamento de quadros estilo Kanban, com autenticação Google, organização por grupos e cards, e interface com suporte a drag and drop.',
        status: 'development',
        tags: ['Next.js', 'TypeScript', 'Firebase']
    },
    {
        icon: 'widgets',
        link: 'https://test-next-shadcn-web.vercel.app/dashboard',
        title: 'Shadcn',
        description: 'Aplicação de referência com shadcn/ui, reunindo dashboard com gráficos, CRUD de tarefas, galeria de componentes e troca de tema.',
        status: 'concluded',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui']
    },
    {
        icon: 'savings',
        repository: 'https://github.com/DiguinhoLNS/quem-me-deve-app-v2',
        title: 'Quem me Deve Mobile',
        description: 'Aplicativo simples para acompanhar cobranças pessoais no dia a dia, com uso offline e geração de pagamento via Pix.',
        status: 'concluded',
        tags: ['React Native', 'TypeScript', 'Redux Toolkit']
    },
    {
        icon: 'screen_search_desktop',
        repository: 'https://github.com/DiguinhoLNS/TCC',
        title: 'Achados e Perdidos Empresarial',
        description: 'Uma plataforma para facilitar a forma com que as empresas administram seus achados e perdidos.',
        status: 'concluded',
        tags: ['PHP', 'AJAX', 'MySQL']
    },
]

export default personalProjects