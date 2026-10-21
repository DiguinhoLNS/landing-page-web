'use client'

import { useTheme } from '@wrksz/themes/client'
import themes, { themeIcon, themeLabel } from '@/constants/themes'
import IconButton from '../IconButton'
import type { TTheme } from '@/interfaces/TTheme'

export default function ToggleThemeIconButton() {

    const { theme, setTheme } = useTheme<TTheme>()

    const current = theme ?? themes[0]

    const toggleTheme = () => {
        setTheme(themes[(themes.indexOf(current) + 1) % themes.length])
    }

    return(

        <>
            <IconButton
                iconName={themeIcon[current]}
                aria-label={`Tema: ${themeLabel[current]}`}
                onClick={toggleTheme}
            />
        </>

    )

}
