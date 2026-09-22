'use client'

import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import springs, { crossFade } from '@/utils/motion/springs'

type TRevealFrom = 'bottom' | 'left' | 'right'

interface RevealProps {
    children?: React.ReactNode
    className?: string
    delay?: number
    from?: TRevealFrom
    amount?: number
}

const offsets: Record<TRevealFrom, { x?: number, y?: number }> = {
    bottom: { y: 22 },
    left: { x: -22 },
    right: { x: 22 }
}

export default function Reveal({
    children,
    className,
    delay = 0,
    from = 'bottom',
    amount = 0.2
}: RevealProps) {

    const reducedMotion = useReducedMotion()

    const offset = offsets[from]

    const initial = reducedMotion ? { opacity: 0 } : { opacity: 0, ...offset }
    const animate = reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }
    const transition = reducedMotion
        ? { ...crossFade, delay }
        : { ...springs.ui, delay }

    return(

        <>
            <motion.div
                className={clsx(className)}
                initial={initial}
                whileInView={animate}
                transition={transition}
                viewport={{ once: true, amount }}
            >
                {children}
            </motion.div>
        </>

    )

}
