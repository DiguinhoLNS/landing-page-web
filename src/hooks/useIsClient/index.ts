'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * `false` no servidor e no primeiro render, `true` depois da hidratação.
 *
 * Usa `useSyncExternalStore` em vez de um `useState` + `useEffect` para não
 * disparar um render em cascata só para descobrir onde o código está rodando.
 */
export default function useIsClient(): boolean {
    return useSyncExternalStore(subscribe, () => true, () => false)
}
