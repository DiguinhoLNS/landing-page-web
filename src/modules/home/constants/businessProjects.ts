import type { IBusinessProject } from "../interfaces/IBusinessProject"

const businessProjects: IBusinessProject[] = [
    {
        icon: 'school',
        title: 'Trilha R1',
        description: 'Plataforma web de <strong>aprendizado educacional</strong>. Atuei na <strong>arquitetura e desenvolvimento</strong> do produto, com integração ao <strong>PLAUD AI</strong> e à <strong>IA de estudos Hardwork</strong>, otimizando a jornada e o fluxo de aprendizado do aluno.',
        company: 'Hardwork Medicina',
        companyColor: 'bg-company-hwm'
    },
    {
        icon: 'shield_locked',
        title: 'Defense System',
        description: 'Sistema de <strong>gestão de acesso</strong>. Desenvolvi o ecossistema <strong>web e mobile</strong>, integrando a geração de acessos via app com a plataforma administrativa, trazendo mais <strong>automação, controle</strong> e visibilidade operacional.',
        company: 'Grupo SBS',
        companyColor: 'bg-company-sbs'
    },
    {
        icon: 'calendar_clock',
        title: 'Reserve',
        description: 'Plataforma web de <strong>agendamento logístico</strong>. Atuei no desenvolvimento da solução, otimizando o processo de <strong>reservas e gerenciamento de horários</strong> para usuários e transportadoras.',
        company: 'Comando Log',
        companyColor: 'bg-company-comando'
    },
    {
        icon: 'delivery_truck_speed',
        title: 'Trux',
        description: 'Aplicativo de <strong>gestão de entregas</strong> para motoristas. Atuei na concepção e desenvolvimento da aplicação, promovendo <strong>redução de custos</strong>, ganho de eficiência e maior <strong>clareza no fluxo operacional</strong>.',
        company: 'UX Group',
        companyColor: 'bg-company-ux'
    },
]

export default businessProjects