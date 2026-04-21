'use client'

import { useTheme } from '@wrksz/themes/client'
import IconButton from '../IconButton'

export default function ToggleThemeIconButton() {

    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(

        <>
            <IconButton
                iconName={theme === 'light' ? 'dark_mode' : 'light_mode'}
                onClick={toggleTheme}
            />
        </>

    )

}
