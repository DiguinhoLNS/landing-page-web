'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Icon from '@/components/common/Icon'
import { PRIVACY_POLICY_PATH } from '@/modules/legal/constants/routes'
import usePressable from '@/hooks/usePressable'
import Container from '../Container'

const scrollToTop = () => {
    document.getElementById('app-scroll')?.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {

    const pressable = usePressable({ scale: 0.96 })

    return(

        <>
            <footer className={clsx('w-full border-t border-outlineVariant py-8', 'md:py-10')}>
                <Container
                    className={clsx(
                        'flex flex-col items-center gap-6',
                        'md:flex-row md:justify-between'
                    )}
                >
                    <div className={clsx('flex flex-col items-center gap-1', 'md:items-start')}>
                        <p className={clsx('text-body text-onSurface')}>
                            rodrigo<span className={clsx('text-primary')}>.dev</span>
                        </p>

                        <p className={clsx('text-caption text-onSurfaceVariant text-center', 'md:text-left')}>
                            © {new Date().getFullYear()} — Desenvolvido por Rodrigo Santos.
                        </p>

                        <Link
                            href={PRIVACY_POLICY_PATH}
                            className={clsx(
                                'text-caption text-onSurfaceVariant underline underline-offset-2 rounded-sm',
                                'outline-none focus-visible:ring-2 focus-visible:ring-primary',
                                'hover:text-onSurface transition-colors duration-150'
                            )}
                        >
                            Política de privacidade
                        </Link>
                    </div>

                    <motion.button
                        {...pressable}
                        type='button'
                        className={clsx(
                            'flex items-center gap-2 h-10 pl-4 pr-3 rounded-full cursor-pointer',
                            'border border-outlineVariant text-onSurfaceVariant',
                            'outline-none focus-visible:ring-2 focus-visible:ring-primary',
                            'hover:text-onSurface transition-colors duration-150'
                        )}
                        onClick={scrollToTop}
                    >
                        <span className={clsx('text-footnote font-medium')}>
                            Voltar ao topo
                        </span>

                        <Icon iconName='arrow_upward' iconSize={18} />
                    </motion.button>
                </Container>
            </footer>
        </>

    )

}
