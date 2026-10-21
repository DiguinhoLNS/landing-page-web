'use client'

import { useContext } from 'react'
import { PaletteContext } from '@/components/app/PaletteProvider'

export default function usePalette() {

    const context = useContext(PaletteContext)

    if (!context) {
        throw new Error('usePalette must be used within PaletteProvider')
    }

    return context

}
