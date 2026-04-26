'use client'

import clsx from 'clsx'
import Container from '../Container'

export default function Footer() {

    return(

        <>
            <footer className={clsx('flex w-full bg-surfaceVariant py-4', 'md:py-10')}>
                <Container
                    className={clsx(
                        'flex flex-col gap-2',
                        'md:flex-row-reverse md:justify-between md:items-center'
                    )}
                >
                    <p className={clsx('text-onSurfaceVariant text-xs text-center')}>
                        Desenvolvido por Rodrigo.
                    </p>
                    
                    <p className={clsx('text-onSurfaceVariant text-xs text-center')}>
                        © {new Date().getFullYear()} todos os direitos reservados.
                    </p>
                </Container>
            </footer>
        </>

    )

}
