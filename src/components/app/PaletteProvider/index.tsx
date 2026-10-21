'use client'

import { createContext, useMemo } from 'react'
import { useTheme } from '@wrksz/themes/client'
import type { TPalette } from '@/interfaces/TPalette'
import type { IPaletteContext } from './types'

export const PaletteContext = createContext<IPaletteContext | undefined>(undefined)

export default function PaletteProvider({ children }: { children: React.ReactNode }) {

    const { theme, setTheme } = useTheme<TPalette>()

    const value = useMemo<IPaletteContext>(() => ({
        palette: theme === 'system' ? undefined : theme,
        setPalette: setTheme
    }), [theme, setTheme])

    return (
        <PaletteContext.Provider value={value}>
            {children}
        </PaletteContext.Provider>
    )

}
