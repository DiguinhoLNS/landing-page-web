'use client'

import { useEffect, useState } from 'react'

/**
 * Qual seção está sendo lida agora.
 *
 * Toda tela precisa responder "onde eu estou?". A nav flutuante usa isso para
 * ancorar o indicador na seção corrente em vez de deixar o usuário sem
 * referência no meio da página.
 *
 * @param ids ids das seções, na ordem em que aparecem
 * @param offset altura do chrome flutuante que cobre o topo do conteúdo
 */
export default function useScrollSpy(ids: string[], offset = 96) {

    const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null)

    useEffect(() => {
        if (ids.length === 0) return

        let frame = 0

        const measure = () => {
            frame = 0

            let current = ids[0]
            let scrolledToEnd = false

            const container = document.getElementById('app-scroll')

            if (!!container) {
                const reachedBottom = container.scrollHeight - container.scrollTop - container.clientHeight
                scrolledToEnd = reachedBottom < 8
            }

            if (scrolledToEnd) {
                setActiveId(ids[ids.length - 1])
                return
            }

            for (const id of ids) {
                const element = document.getElementById(id)

                if (!element) continue

                if (element.getBoundingClientRect().top - offset <= 1) current = id
            }

            setActiveId(current)
        }

        const onScroll = () => {
            if (frame) return
            frame = requestAnimationFrame(measure)
        }

        const container = document.getElementById('app-scroll')
        const scroller: HTMLElement | Window = container ?? window

        measure()

        scroller.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })

        return () => {
            if (frame) cancelAnimationFrame(frame)
            scroller.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [ids, offset])

    return activeId
}
