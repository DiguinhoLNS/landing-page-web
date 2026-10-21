'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '@wrksz/themes/client'
import Icon from '@/components/common/Icon'
import Divider from '@/components/common/Divider'
import IconButton from '@/components/common/IconButton'
import palettes, { paletteLabel } from '@/constants/palettes'
import themes, { themeIcon, themeLabel } from '@/constants/themes'
import usePalette from '@/hooks/usePalette'
import useOutsideClick from '@/hooks/useOutsideClick'
import type { TTheme } from '@/interfaces/TTheme'
import springs, { crossFade } from '@/utils/motion/springs'
import AppearanceMenuOption from './components/Option'

export default function AppearanceMenu() {

    const [open, setOpen] = useState(false)

    const reducedMotion = useReducedMotion()

    const containerRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLElement | null>(null)

    const { theme, setTheme } = useTheme<TTheme>()
    const { palette, setPalette } = usePalette()

    useOutsideClick(containerRef, setOpen)

    useEffect(() => {
        if (!open) return

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return

            setOpen(false)
            triggerRef.current?.focus()
        }

        document.addEventListener('keydown', onKeyDown)

        return () => document.removeEventListener('keydown', onKeyDown)
    }, [open])

    const hidden = reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: -6 }

    return(

        <>
            <div ref={containerRef} className={clsx('relative')}>
                <IconButton
                    handleRef={element => { triggerRef.current = element as HTMLElement | null }}
                    iconName='palette'
                    aria-label='Aparência'
                    aria-haspopup='menu'
                    aria-expanded={open}
                    onClick={() => setOpen(current => !current)}
                />

                <AnimatePresence>
                    {open && (
                        <motion.div
                            role='menu'
                            aria-label='Aparência'
                            className={clsx(
                                'absolute top-full right-0 mt-2 origin-top-right',
                                'flex flex-col w-56 p-1.5 rounded-3xl',
                                'material-sheet material-edge'
                            )}
                            initial={hidden}
                            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                            exit={hidden}
                            transition={reducedMotion ? crossFade : springs.ui}
                        >
                            <p className={clsx('px-3 pt-2 pb-1', 'text-overline uppercase vibrant-secondary')}>
                                Tema
                            </p>

                            {themes.map(option => (
                                <AppearanceMenuOption
                                    key={option}
                                    label={themeLabel[option]}
                                    leading={<Icon iconName={themeIcon[option]} iconSize={20} />}
                                    selected={theme === option}
                                    onSelect={() => setTheme(option)}
                                />
                            ))}

                            <div className={clsx('px-3 py-1.5')}>
                                <Divider />
                            </div>

                            <p className={clsx('px-3 pt-1 pb-1', 'text-overline uppercase vibrant-secondary')}>
                                Paleta
                            </p>

                            {palettes.map(option => (
                                <AppearanceMenuOption
                                    key={option}
                                    label={paletteLabel[option]}
                                    leading={(
                                        <span
                                            data-palette={option}
                                            className={clsx('size-4 rounded-full bg-primary')}
                                        />
                                    )}
                                    selected={palette === option}
                                    onSelect={() => setPalette(option)}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>

    )

}
