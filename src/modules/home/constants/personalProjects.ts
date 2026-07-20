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
        icon: 'savings',
        title: 'Quem me Deve Web',
        description: 'Aplicação web para gerenciar cobranças pessoais, acompanhar devedores e gerar pagamentos via Pix.',
        status: 'planned',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'PIX']
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