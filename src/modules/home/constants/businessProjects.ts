import type { IBusinessProject } from "../interfaces/IBusinessProject"

const businessProjects: IBusinessProject[] = [
    {
        icon: 'school',
        title: 'Trilha R1',
        description: 'Plataforma web de aprendizado do aluno. Atuei na criação da arquitetura e desenvolvimento do produto, com destaque na integração com o PLAUD AI e a IA de estudos Hardwork. Melhorando o fluxo de aprendizado do aluno.',
        company: 'Hardwork Medicina',
        companyColor: 'bg-company-hwm'
    },
    {
        icon: 'shield_locked',
        title: 'Defense System',
        description: 'Sistema de gestão de acesso. Atuei no desenvolvimento do ecossistema web e mobile, garantindo a efetividade na geração de acessos via aplicativo do morador para a plataforma web de gerenciamento, otimizando o processo para a criação de acessos e na visualização dos dados gerados pelos acessos.',
        company: 'Grupo SBS',
        companyColor: 'bg-company-sbs'
    },
    {
        icon: 'calendar_clock',
        title: 'Reserve',
        description: 'Plataforma web de agendamentos de cargas. Atuei no desenvolvimento do sistema, otimizando o processo de reserva e gerenciamento de horários para os usuários e transportadoras, garantindo a integração eficiente com todo o fluxo de agendamento.',
        company: 'Comando Log',
        companyColor: 'bg-company-comando'
    },
    {
        icon: 'delivery_truck_speed',
        title: 'Trux',
        description: 'Aplicativo de gestão de entregas para motoristas. Atuei na elaboração e desenvolvimento do aplicativo, que otimizou o custo e tempo de entrega e trouxe mais clareza no fluxo de entrega para os motoristas.',
        company: 'UX Group',
        companyColor: 'bg-company-ux'
    },
]

export default businessProjects