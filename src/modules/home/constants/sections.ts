export interface IHomeSection {
    id: string
    /** Rótulo direto, pelo conteúdo da seção — não um guarda-chuva vago. */
    label: string
    icon: string
    /** Aparece na nav compacta do mobile. */
    compact?: boolean
}

const homeSections: IHomeSection[] = [
    {
        id: 'home-hero-section',
        label: 'Início',
        icon: 'home',
        compact: true
    },
    {
        id: 'home-jobs-section',
        label: 'Experiência',
        icon: 'work_history',
        compact: true
    },
    {
        id: 'home-contributions-section',
        label: 'Contribuições',
        icon: 'deployed_code'
    },
    {
        id: 'home-products-section',
        label: 'Produtos',
        icon: 'apps',
        compact: true
    },
    {
        id: 'home-projects-section',
        label: 'Projetos',
        icon: 'code_blocks',
        compact: true
    },
    {
        id: 'home-setup-section',
        label: 'Setup',
        icon: 'desktop_windows'
    },
    {
        id: 'home-contact-section',
        label: 'Contato',
        icon: 'alternate_email',
        compact: true
    }
]

export const homeSectionIds = homeSections.map(section => section.id)

export const compactHomeSections = homeSections.filter(section => section.compact)

/**
 * Traduz a seção realmente em tela para o item que a representa numa nav.
 *
 * Nenhuma nav cabe todas as seções: Contribuições e Setup ficam de fora da
 * versão compacta. Sem esse mapeamento, rolar até uma seção não listada
 * deixaria a nav sem nenhum item ativo — o indicador desmonta e pisca em vez
 * de deslizar, e a tela para de responder "onde eu estou".
 *
 * A seção não listada passa a ser coberta pelo item anterior mais próximo.
 * Antes do primeiro item da nav (no hero) não há resposta, e aí é `null`
 * mesmo — fingir uma posição seria pior.
 */
export function resolveNavActiveId(
    activeSectionId: string | null,
    availableIds: string[]
): string | null {

    if (!activeSectionId) return null

    const position = homeSectionIds.indexOf(activeSectionId)

    if (position < 0) return null

    for (let index = position; index >= 0; index--) {
        if (availableIds.includes(homeSectionIds[index])) return homeSectionIds[index]
    }

    return null
}

export default homeSections
