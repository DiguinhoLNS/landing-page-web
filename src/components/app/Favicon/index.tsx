'use client'

import palettes, { paletteFavicon } from '@/constants/palettes'
import usePalette from '@/hooks/usePalette'

export default function AppFavicon() {

    const { palette } = usePalette()

    return(

        <>
            <link
                rel='icon'
                href={paletteFavicon[palette ?? palettes[0]]}
                sizes='any'
            />
        </>

    )

}
