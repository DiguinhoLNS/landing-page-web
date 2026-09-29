import type { ICookieGroup } from '../interfaces/ICookieGroup'

export const cookiePolicyUpdatedAt = '29 de setembro de 2026'

const cookieGroups: ICookieGroup[] = [
    {
        id: 'essential',
        title: 'Essenciais',
        description: 'Guardam preferências que você mesmo definiu. Ficam no armazenamento local do navegador, não são enviados a nenhum servidor e não dependem de consentimento.',
        required: true,
        items: [
            {
                name: 'theme',
                provider: 'rodrigo.dev',
                storage: 'localStorage',
                duration: 'Até ser apagado',
                purpose: 'Lembrar se você prefere o tema claro ou escuro.'
            },
            {
                name: 'cookie-consent',
                provider: 'rodrigo.dev',
                storage: 'localStorage',
                duration: 'Até ser apagado',
                purpose: 'Lembrar a sua escolha sobre cookies de análise, para não perguntar de novo a cada visita.'
            }
        ]
    },
    {
        id: 'analytics',
        title: 'Análise',
        description: 'Definidos pelo Microsoft Clarity somente depois que você aceita. Ajudam a entender como o site é usado — quais seções são vistas, onde as pessoas clicam e onde travam.',
        required: false,
        items: [
            {
                name: '_clck',
                provider: 'Microsoft Clarity',
                storage: 'Cookie',
                duration: '1 ano',
                purpose: 'Identificar o mesmo navegador entre visitas, com um ID aleatório.'
            },
            {
                name: '_clsk',
                provider: 'Microsoft Clarity',
                storage: 'Cookie',
                duration: '1 dia',
                purpose: 'Agrupar as páginas vistas em uma mesma sessão.'
            },
            {
                name: 'CLID',
                provider: 'Microsoft Clarity',
                storage: 'Cookie',
                duration: '1 ano',
                purpose: 'Identificar a primeira vez que o Clarity viu este navegador.'
            },
            {
                name: 'ANONCHK',
                provider: 'Microsoft',
                storage: 'Cookie',
                duration: '10 minutos',
                purpose: 'Indicar se o MUID foi transferido para o ANID.'
            },
            {
                name: 'MR',
                provider: 'Microsoft',
                storage: 'Cookie',
                duration: '7 dias',
                purpose: 'Indicar se o MUID deve ser atualizado.'
            },
            {
                name: 'MUID',
                provider: 'Microsoft',
                storage: 'Cookie',
                duration: '1 ano',
                purpose: 'Identificar navegadores únicos em sites da Microsoft.'
            },
            {
                name: 'SM',
                provider: 'Microsoft Clarity',
                storage: 'Cookie',
                duration: 'Sessão',
                purpose: 'Sincronizar o MUID entre domínios da Microsoft.'
            }
        ]
    }
]

export default cookieGroups
