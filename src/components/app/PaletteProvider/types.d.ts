import type { TPalette } from '@/interfaces/TPalette'

export interface IPaletteContext {
    palette: TPalette | undefined
    setPalette: (palette: TPalette) => void
}
