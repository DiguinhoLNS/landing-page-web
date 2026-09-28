import type { IJob } from "../interfaces/IJob"

const jobs: IJob[] = [
    {
        type: 'alta',
        link: 'https://altasolucoes.com.br',
        title: 'Alta Soluções',
        position: 'Full-stack Developer',
        period: 'MAR 2021 - MAR 2025',
        description: 'Atuei no desenvolvimento de aplicações <strong>web e mobile</strong> com <strong>TypeScript, React, React Native e JavaScript</strong>, focando em <strong>performance, escalabilidade</strong> e <strong>experiência do usuário</strong>. Desenvolvi soluções para <strong>controle de acesso, e-commerce e logística</strong>, incluindo operações <strong>First Mile e Last Mile</strong>, sempre priorizando <strong>segurança, usabilidade</strong> e qualidade.',
    },
    {
        type: 'hwm',
        link: 'https://home.hardworkmedicina.com.br/',
        title: 'Hardwork Medicina',
        position: 'Front-end Developer',
        period: 'MAR 2025 - Presente',
        description: 'Atuo em <strong>plataformas educacionais</strong> usadas por <strong>milhares de alunos de medicina</strong> em todo o Brasil. Criei a nova <strong>arquitetura de projetos</strong>, hoje padrão da empresa, que <strong>reduziu o tempo de deploy em cerca de 70%</strong>. Construí do zero o <strong>design system</strong> com <strong>Storybook, Tailwind e Chromatic</strong> e liderei a reconstrução do <strong>aplicativo em Expo</strong>, hub central dos produtos do aluno. Também reestruturei a <strong>autenticação</strong> com tokens de acesso e refresh via cookies.',
    },
]

export default jobs