'use client'

import palettes from '@/constants/palettes'
import usePalette from '@/hooks/usePalette'
import IconButton from '../IconButton'

export default function TogglePaletteIconButton() {

    const { palette, setPalette } = usePalette()

    const togglePalette = () => {
        const current = palettes.indexOf(palette ?? palettes[0])
        setPalette(palettes[(current + 1) % palettes.length])
    }

    return(

        <>
            <IconButton
                iconName={'palette'}
                aria-label={'Trocar paleta de cores'}
                onClick={togglePalette}
            />
        </>

    )

}
