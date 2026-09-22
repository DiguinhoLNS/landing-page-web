'use client'

import { useEffect, useMemo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useMotionValue, useReducedMotion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import ToggleThemeIconButton from '@/components/common/ToggleThemeIconButton'
import useSectionNav from '@/hooks/useSectionNav'
import useIsClient from '@/hooks/useIsClient'
import useMediaQuery from '@/hooks/useMediaQuery'
import homeSections from '@/modules/home/constants/sections'
import springs from '@/utils/motion/springs'
import Container from '../Container'

const navSections = homeSections.filter(section => section.id !== 'home-hero-section')

export default function Header() {

    const isClient = useIsClient()
    const reducedMotion = useReducedMotion()

    const showsEverySection = useMediaQuery('(min-width: 1024px)')

    const visibleNavIds = useMemo(
        () => navSections
            .filter(section => showsEverySection || section.compact)
            .map(section => section.id),
        [showsEverySection]
    )

    const { activeId, goTo } = useSectionNav(visibleNavIds)

    const materialOpacity = useMotionValue(0)

    useEffect(() => {
        const scroller = document.getElementById('app-scroll')

        if (!scroller) return

        let frame = 0

        const measure = () => {
            frame = 0
            materialOpacity.set(Math.min(1, scroller.scrollTop / 64))
        }

        const onScroll = () => {
            if (frame) return
            frame = requestAnimationFrame(measure)
        }

        measure()
        scroller.addEventListener('scroll', onScroll, { passive: true })

        return () => {
            if (frame) cancelAnimationFrame(frame)
            scroller.removeEventListener('scroll', onScroll)
        }
    }, [materialOpacity])

    return(

        <>
            <header className={clsx('z-100 sticky top-0', 'w-full')}>
                <motion.div
                    aria-hidden
                    className={clsx('absolute inset-0', 'material-chrome')}
                    style={{ opacity: materialOpacity }}
                />

                <Container
                    className={clsx(
                        'relative',
                        'grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 h-16'
                    )}
                >
                    <Link
                        href={'/'}
                        className={clsx(
                            'col-start-1 justify-self-start min-w-0 max-w-full overflow-hidden rounded-lg',
                            'outline-none focus-visible:ring-2 focus-visible:ring-primary'
                        )}
                    >
                        <p className={clsx('flex whitespace-nowrap', 'text-title text-onSurface')}>
                            {(isClient && !reducedMotion) ? (
                                <Typewriter
                                    component={'span'}
                                    options={{
                                        strings: ['rodrigo', 'diguinho', 'rodrigão', 'digo'],
                                        autoStart: true,
                                        loop: true,
                                        cursor: ''
                                    }}
                                />
                            ) : (
                                <span>rodrigo</span>
                            )}

                            <span className={clsx('text-primary')}>.dev</span>
                        </p>
                    </Link>

                    <nav className={clsx('col-start-2 hidden items-center gap-0.5', 'md:flex')}>
                        {navSections.map(section => {
                            const active = activeId === section.id

                            return(
                                <button
                                    key={section.id}
                                    type='button'
                                    aria-current={active ? 'true' : undefined}
                                    className={clsx(
                                        'relative',
                                        'items-center h-9 px-3.5 rounded-full cursor-pointer',
                                        'outline-none focus-visible:ring-2 focus-visible:ring-primary',
                                        section.compact ? 'flex' : 'hidden lg:flex'
                                    )}
                                    onClick={() => goTo(section.id)}
                                >
                                    {active && (
                                        <motion.span
                                            layoutId='header-nav-indicator'
                                            className={clsx('absolute inset-0', 'rounded-full bg-onSurface/8')}
                                            transition={springs.move}
                                        />
                                    )}

                                    <span
                                        className={clsx(
                                            'z-10 relative',
                                            'text-footnote font-medium transition-colors duration-150',
                                            active ? 'text-onSurface' : 'text-onSurfaceVariant hover:text-onSurface'
                                        )}
                                    >
                                        {section.label}
                                    </span>
                                </button>
                            )
                        })}
                    </nav>

                    <div className={clsx('col-start-3 flex justify-self-end')}>
                        <ToggleThemeIconButton />
                    </div>
                </Container>
            </header>
        </>

    )

}
