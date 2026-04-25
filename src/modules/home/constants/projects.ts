import type { IProject } from "../interfaces/IProject"

const projects: IProject[] = [
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
        title: 'Quem me Deve?',
        description: 'Aplicativo para acompanhar cobranças pessoais, com foco em simplicidade, uso offline e geração de pagamento via Pix.',
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

export default projects