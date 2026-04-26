'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
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

    return(

        <>
            <motion.section
                id={id}
                className={clsx(
                    'w-full py-10',
                    className
                )}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Container className={contentClassName}>
                    {children}
                </Container>
            </motion.section>
        </>

    )

}
