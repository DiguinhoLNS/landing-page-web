'use client'

import Link from 'next/link'
import clsx from 'clsx'
import Typewriter from 'typewriter-effect'
import ToggleThemeIconButton from '@/components/common/ToggleThemeIconButton'
import Container from '../Container'

export default function Header() {

    return(

        <>
            <header
                className={clsx(
                    'z-100 sticky top-0',
                    'w-full bg-surface/80 backdrop-blur-xl '
                )}
            >
                <Container
                    className={clsx('flex items-center justify-between h-14')}
                >
                    <Link
                        href={'/'}
                    >
                        <p className={clsx('flex', 'text-onSurface text-3xl')}>
                            <Typewriter
                                component={'span'}
                                options={{
                                    strings: ['rodrigo', 'diguinho', 'rodrigão', 'digo'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: '',
                                }}
                            />

                            <span className={clsx('text-primary')}>.dev</span>
                        </p>
                    </Link>

                    <nav>

                    </nav>

                    <div>
                        <ToggleThemeIconButton />
                    </div>
                </Container>
            </header>
        </>

    )

}
