'use client'

import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import springs, { crossFade } from '@/utils/motion/springs'
import Container from '../Container'

interface SectionProps {
    children?: React.ReactNode
    id?: string
    className?: string
    contentClassName?: string
}

export default function Section({
    children,
    id,
    className,
    contentClassName
}: SectionProps) {

    const reducedMotion = useReducedMotion()

    return(

        <>
            <motion.section
                id={id}
                className={clsx(
                    'w-full scroll-mt-20 py-16',
                    'md:py-24',
                    className
                )}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
                whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={reducedMotion ? crossFade : springs.ui}
                viewport={{ once: true, amount: 0.12 }}
            >
                <Container className={contentClassName}>
                    {children}
                </Container>
            </motion.section>
        </>

    )

}
