'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import Section from '@/components/page/Section'
import springs, { crossFade } from '@/utils/motion/springs'
import scrollToView from '@/utils/scrollToView'

export default function HomeHero() {

    const reducedMotion = useReducedMotion()

    const enter = (delay: number) => ({
        initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
        animate: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
        transition: reducedMotion ? { ...crossFade, delay } : { ...springs.ui, delay }
    })

    return(

        <>
            <Section
                id='home-hero-section'
                className={clsx(
                    'relative',
                    'flex items-center min-h-[calc(100svh-4rem)] pt-8 pb-28',
                    'md:py-16'
                )}
                contentClassName={clsx('flex')}
            >
                <div
                    className={clsx(
                        'grid grid-cols-1 items-center gap-8 w-full',
                        'sm:gap-10',
                        'md:grid-cols-[1.1fr_0.9fr] md:gap-20'
                    )}
                >
                    <div className={clsx('flex flex-col items-start gap-8 order-1')}>
                        <motion.div {...enter(0)}>
                            <div
                                className={clsx(
                                    'flex items-center gap-2.5 h-8 pl-3 pr-4 rounded-full',
                                    'material-control'
                                )}
                            >
                                <span className={clsx('relative flex size-2')}>
                                    <span className={clsx('absolute inline-flex size-full rounded-full bg-primary opacity-60 animate-ping')} />
                                    <span className={clsx('relative inline-flex size-2 rounded-full bg-primary')} />
                                </span>

                                <span className={clsx('text-caption vibrant-secondary')}>
                                    Disponível para novos projetos
                                </span>
                            </div>
                        </motion.div>

                        <motion.div {...enter(0.06)} className={clsx('flex items-center gap-4 w-full')}>
                            <div
                                className={clsx(
                                    'relative shrink-0 w-[30%] aspect-square overflow-hidden rounded-3xl',
                                    'ring-1 ring-outlineVariant shadow-card',
                                    'md:hidden'
                                )}
                            >
                                <Image
                                    src='/images/rodrigo.jpeg'
                                    alt='Retrato do Rodrigo'
                                    fill
                                    priority
                                    sizes='(min-width: 768px) 1px, 30vw'
                                    className={clsx('object-cover')}
                                />
                            </div>

                            <div className={clsx('flex flex-1 flex-col justify-center gap-2 min-w-0')}>
                                <p className={clsx('text-body-lg text-onSurfaceVariant')}>
                                    Olá, eu sou o
                                </p>

                                <h1 className={clsx('text-display text-onSurface')}>
                                    Rodr<span className={clsx('text-primary')}>igo</span>
                                </h1>
                            </div>
                        </motion.div>

                        <motion.p
                            {...enter(0.12)}
                            className={clsx('max-w-xl', 'text-body text-onSurfaceVariant text-pretty', 'sm:text-body-lg')}
                        >
                            Desenvolvedor apaixonado por tecnologia e design.
                            Transformo ideias em produtos digitais escaláveis com funcionalidades e interfaces que impressionam.
                        </motion.p>

                        <motion.div
                            {...enter(0.18)}
                            className={clsx('flex flex-col gap-3 w-full', 'sm:flex-row sm:w-auto')}
                        >
                            <Button
                                buttonMode='contained'
                                buttonSize='lg'
                                label='Fale comigo'
                                iconName='arrow_outward'
                                iconPosition='right'
                                fullWidth={false}
                                className={clsx('w-full', 'sm:w-auto')}
                                onClick={() => scrollToView('home-contact-section')}
                            />

                            <Button
                                buttonMode='glass'
                                buttonSize='lg'
                                label='Ver projetos'
                                fullWidth={false}
                                className={clsx('w-full', 'sm:w-auto')}
                                onClick={() => scrollToView('home-projects-section')}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        {...enter(0.1)}
                        className={clsx('hidden justify-center order-2', 'md:flex lg:justify-end')}
                    >
                        <div className={clsx('relative w-full max-w-[16rem]', 'lg:max-w-88')}>
                            <div
                                aria-hidden
                                className={clsx(
                                    'absolute -inset-6 -z-10 rounded-full',
                                    'bg-primary/12 blur-3xl'
                                )}
                            />

                            <div
                                className={clsx(
                                    'relative aspect-square w-full overflow-hidden rounded-[2.25rem]',
                                    'ring-1 ring-outlineVariant shadow-card'
                                )}
                            >
                                <Image
                                    src='/images/rodrigo.jpeg'
                                    alt=''
                                    aria-hidden
                                    fill
                                    priority
                                    sizes='(max-width: 767px) 1px, (min-width: 1024px) 22rem, 16rem'
                                    className={clsx('object-cover')}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.button
                    type='button'
                    aria-label='Ir para a experiência'
                    className={clsx(
                        'absolute inset-x-0 bottom-6 z-10',
                        'hidden flex-col items-center gap-1 mx-auto w-fit cursor-pointer',
                        'text-onSurfaceVariant hover:text-onSurface',
                        'lg:flex'
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ...crossFade, delay: 0.5 }}
                    whileHover={reducedMotion ? { opacity: 0.8 } : { y: 2 }}
                    onClick={() => scrollToView('home-jobs-section')}
                >
                    <span className={clsx('text-caption uppercase')}>Role</span>

                    <Icon iconName='keyboard_arrow_down' iconSize={20} />
                </motion.button>
            </Section>
        </>

    )

}
