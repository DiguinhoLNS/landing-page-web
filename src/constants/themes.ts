import type { TTheme } from '@/interfaces/TTheme'

const themes: TTheme[] = ['system', 'light', 'dark']

export const themeLabel: Record<TTheme, string> = {
    system: 'Automático',
    light: 'Claro',
    dark: 'Escuro'
}

export const themeIcon: Record<TTheme, string> = {
    system: 'contrast',
    light: 'light_mode',
    dark: 'dark_mode'
}

export default themes
