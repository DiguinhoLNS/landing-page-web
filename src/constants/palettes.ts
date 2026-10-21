import type { TPalette } from '@/interfaces/TPalette'

const palettes: TPalette[] = ['blue', 'green']

export const paletteLabel: Record<TPalette, string> = {
    blue: 'Azul',
    green: 'Verde'
}

export const paletteFavicon: Record<TPalette, string> = {
    blue: '/favicons/blue.ico',
    green: '/favicons/green.ico'
}

export default palettes
