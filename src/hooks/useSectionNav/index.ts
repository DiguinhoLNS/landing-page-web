'use client'

import { useCallback, useEffect, useState } from 'react'
import { homeSectionIds, resolveNavActiveId } from '@/modules/home/constants/sections'
import scrollToView from '@/utils/scrollToView'
import useScrollSpy from '../useScrollSpy'

/**
 * Item ativo da nav, com a intenção do clique tendo prioridade sobre o spy.
 *
 * Sem isso, clicar numa aba distante faz o indicador percorrer todas as seções
 * do caminho: o scroll é suave, o spy reavalia durante todo o trajeto e cada
 * seção intermediária vira um alvo novo. A mola reinicia a cada salto e nunca
 * assenta — o indicador chega atrasado, arrastando.
 *
 * Um clique é uma intenção declarada, não uma consequência do scroll: o
 * indicador vai direto para o destino e só devolve o comando ao spy quando ele
 * concorda, ou quando o usuário retoma a rolagem por conta própria.
 */
export default function useSectionNav(availableIds: string[]) {

    const [pending, setPending] = useState<string | null>(null)

    const spySectionId = useScrollSpy(homeSectionIds)
    const spyActiveId = resolveNavActiveId(spySectionId, availableIds)

    if (!!pending && spyActiveId === pending) setPending(null)

    useEffect(() => {
        if (!pending) return

        const scroller = document.getElementById('app-scroll')

        if (!scroller) return

        const release = () => setPending(null)

        scroller.addEventListener('wheel', release, { passive: true })
        scroller.addEventListener('touchstart', release, { passive: true })

        return () => {
            scroller.removeEventListener('wheel', release)
            scroller.removeEventListener('touchstart', release)
        }
    }, [pending])

    const goTo = useCallback((sectionId: string) => {
        setPending(resolveNavActiveId(sectionId, availableIds))
        scrollToView(sectionId)
    }, [availableIds])

    return {
        activeId: pending ?? spyActiveId,
        goTo
    }
}
