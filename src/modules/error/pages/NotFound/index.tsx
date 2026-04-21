'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/Button'

export default function ErrorNotFound() {

    const router = useRouter()

    const redirect = () => {
        router.replace('/')
    }

    return(

        <>
            <div className={clsx('flex flex-col items-center justify-center')}>
                <h1 className={clsx('font-bold text-primary text-[80px] text-center')}>
                    404
                </h1>

                <p className={clsx('text-onSurface text-center')}>
                    Ops... Página não encontrada!
                </p>
            </div>

            <Button
                label='Voltar para home'
                onClick={redirect}
            />
        </>

    )

}
