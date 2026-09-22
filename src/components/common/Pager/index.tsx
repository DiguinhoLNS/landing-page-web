'use client'

import { Children, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import useDragGesture from '@/hooks/useDragGesture'
import springs, { crossFade, withVelocity } from '@/utils/motion/springs'
import { nearestSnapPoint, project } from '@/utils/motion/physics'

interface PagerProps {
    index: number
    onIndexChange: (index: number) => void
    children?: React.ReactNode
    className?: string
    onProgress?: (progress: MotionValue<number>) => void
}

const DECELERATION = 0.998

export default function Pager({
    index,
    onIndexChange,
    children,
    className,
    onProgress
}: PagerProps) {

    const reducedMotion = useReducedMotion()

    const pages = useMemo(() => Children.toArray(children), [children])

    const viewportRef = useRef<HTMLDivElement>(null)
    const pageRefs = useRef<Array<HTMLDivElement | null>>([])
    const widthRef = useRef(1)
    const settledIndexRef = useRef(index)

    const [height, setHeight] = useState<number | undefined>(undefined)

    const x = useMotionValue(0)

    const progress = useTransform(x, current => -current / (widthRef.current || 1))

    const measure = useCallback(() => {
        const viewport = viewportRef.current

        if (!viewport) return

        widthRef.current = viewport.clientWidth || 1

        const active = pageRefs.current[settledIndexRef.current]

        if (!!active) setHeight(active.offsetHeight)

        x.set(-settledIndexRef.current * widthRef.current)
    }, [x])

    useLayoutEffect(() => {
        measure()
    }, [measure, pages.length])

    useEffect(() => {
        const viewport = viewportRef.current

        if (!viewport) return

        const observer = new ResizeObserver(() => measure())

        observer.observe(viewport)

        const active = pageRefs.current[settledIndexRef.current]

        if (!!active) observer.observe(active)

        return () => observer.disconnect()
    }, [measure])

    useEffect(() => {
        onProgress?.(progress)
    }, [onProgress, progress])

    useEffect(() => {
        if (settledIndexRef.current === index) return

        settledIndexRef.current = index

        const target = -index * widthRef.current
        const activePage = pageRefs.current[index]

        if (!!activePage) setHeight(activePage.offsetHeight)

        if (reducedMotion) {
            x.set(target)
            return
        }

        const controls = animate(x, target, springs.move)

        return () => controls.stop()
    }, [index, reducedMotion, x])

    const drag = useDragGesture({
        axis: 'x',
        value: x,
        enabled: !reducedMotion && pages.length > 1,
        getBounds: () => ({
            min: -(pages.length - 1) * widthRef.current,
            max: 0
        }),
        getDimension: () => widthRef.current,
        onRelease: ({ position, velocity }) => {
            const width = widthRef.current
            const snapPoints = pages.map((_, page) => -page * width)

            const projected = position + project(velocity, DECELERATION)
            const target = nearestSnapPoint(projected, snapPoints)
            const nextIndex = Math.round(-target / width)

            settledIndexRef.current = nextIndex

            const activePage = pageRefs.current[nextIndex]

            if (!!activePage) setHeight(activePage.offsetHeight)

            animate(x, target, withVelocity(springs.momentum, velocity))

            if (nextIndex !== index) onIndexChange(nextIndex)
        }
    })

    return(

        <>
            {/* A margem negativa aqui e o respiro dentro de cada página se
                cancelam: o conteúdo fica exatamente onde estava, mas a região
                de recorte cresce 12px para cada lado. Sem isso, um card que
                ocupa a página inteira tem a própria sombra cortada rente à
                borda, já que `overflow` recorta na caixa de padding. */}
            <motion.div
                ref={viewportRef}
                className={clsx(
                    'relative w-[calc(100%+1.5rem)] overflow-hidden -m-3',
                    (!reducedMotion && pages.length > 1) && 'cursor-grab active:cursor-grabbing',
                    className
                )}
                animate={{ height }}
                transition={reducedMotion ? crossFade : springs.move}
                style={{ touchAction: 'pan-y' }}
                {...(reducedMotion ? {} : drag.handlers)}
            >
                <motion.div
                    className={clsx('flex w-full items-start')}
                    style={{ x }}
                >
                    {pages.map((page, position) => (
                        <div
                            key={position}
                            ref={element => { pageRefs.current[position] = element }}
                            aria-hidden={position !== index}
                            inert={position !== index}
                            className={clsx('w-full shrink-0 p-3')}
                        >
                            {page}
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </>

    )

}
