'use client'

import clsx from 'clsx'
import Button from '@/components/common/Button'
import Section from '@/components/page/Section'
import scrollToView from '@/utils/scrollToView'

export default function HomeHero() {

    return(
    
        <>
            <Section
                id='home-hero-section'
                className={clsx('min-h-[calc(100svh-56px)]')}
                contentClassName={clsx('flex h-full')}
            >
                <div
                    className={clsx(
                        'flex flex-1 flex-col gap-20',
                        'md:flex-row md:items-center md:justify-between'
                    )}
                >
                    <div className={clsx('flex flex-1 flex-col gap-10 ')}>
                        <div className={clsx('flex flex-col gap-1')}>
                            <p className={clsx('text-onSurface/60')}>
                                Olá, eu sou o
                            </p>

                            <h1 className={clsx('font-extrabold text-onSurface text-6xl', 'sm:text-8xl')}>
                                Rodr<span className={clsx('text-primary')}>igo</span>
                            </h1>
                        </div>

                        <p className={clsx('max-w-lg', 'text-onSurface text-lg')}>
                            Desenvolvedor front-end apaixonado por tecnologia e design.
                            <br />
                            Transformando ideias em produtos digitais escaláveis com interfaces que impressionam.
                        </p>

                        <div className={clsx('flex flex-col gap-4', 'sm:flex-row')}>
                            <Button
                                buttonMode='contained'
                                label='Fale comigo'
                                onClick={() => {
                                    scrollToView('home-contact-section')
                                }}
                            />

                            <Button
                                buttonMode='outlined'
                                label='Ver projetos'
                                onClick={() => {
                                    scrollToView('home-projects-section')
                                }}
                            />
                        </div>
                    </div>

                    <div
                        className={clsx(
                            'flex flex-1 items-center justify-center',
                            'lg:justify-end'
                        )}
                    >
                        <div
                            className={clsx(
                                'w-3/4 max-w-100 aspect-square rounded-full bg-cover bg-center bg-no-repeat',
                                'image-rodrigo'
                            )}
                        />
                    </div>
                </div>
            </Section>
        </>

    )

}
