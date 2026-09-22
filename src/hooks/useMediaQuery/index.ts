'use client'

import { useCallback, useSyncExternalStore } from 'react'

/**
 * Acompanha uma media query sem disparar render em cascata.
 *
 * No servidor devolve `false`: o primeiro render assume o layout compacto e a
 * hidratação corrige. Como a visibilidade dos itens já é resolvida por CSS,
 * o que muda aqui é só qual item a nav considera ativo.
 */
export default function useMediaQuery(query: string): boolean {

    const subscribe = useCallback((onChange: () => void) => {
        const list = window.matchMedia(query)

        list.addEventListener('change', onChange)

        return () => list.removeEventListener('change', onChange)
    }, [query])

    return useSyncExternalStore(
        subscribe,
        () => window.matchMedia(query).matches,
        () => false
    )
}
