'use client'

import clsx from 'clsx'
import Button from '@/components/common/Button'
import Chip from '@/components/common/Chip'
import useIsClient from '@/hooks/useIsClient'
import useCookieConsentStore, { type TCookieConsentStatus } from '@/stores/cookieConsent'

const statusChip: Record<TCookieConsentStatus, { label: string, variant: 'default' | 'success' | 'error' }> = {
    pending: { label: 'Sem resposta', variant: 'default' },
    granted: { label: 'Aceitos', variant: 'success' },
    denied: { label: 'Recusados', variant: 'error' }
}

export default function CookiePolicyConsentControls() {

    const isClient = useIsClient()

    const status = useCookieConsentStore(state => state.status)
    const updatedAt = useCookieConsentStore(state => state.updatedAt)
    const grant = useCookieConsentStore(state => state.grant)
    const deny = useCookieConsentStore(state => state.deny)

    const chip = statusChip[isClient ? status : 'pending']

    return(

        <>
            <div
                className={clsx(
                    'flex flex-col gap-5 p-5 rounded-3xl',
                    'bg-elevation-1 border border-outlineVariant shadow-card',
                    'md:flex-row md:items-center md:justify-between'
                )}
            >
                <div className={clsx('flex flex-col gap-2')}>
                    <div className={clsx('flex flex-wrap items-center gap-3')}>
                        <p className={clsx('text-body font-medium text-onSurface')}>
                            Cookies de análise
                        </p>

                        <Chip label={chip.label} variant={chip.variant} />
                    </div>

                    <p className={clsx('text-footnote text-onSurfaceVariant')}>
                        {(isClient && !!updatedAt)
                            ? `Escolha registrada em ${new Date(updatedAt).toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'short' })}.`
                            : 'Você pode mudar de ideia quando quiser.'}
                    </p>
                </div>

                <div className={clsx('flex shrink-0 gap-2')}>
                    <Button
                        label='Recusar'
                        buttonMode='outlined'
                        buttonSize='sm'
                        fullWidth={false}
                        disabled={isClient && status === 'denied'}
                        className={clsx('flex-1', 'md:flex-none')}
                        onClick={deny}
                    />

                    <Button
                        label='Aceitar'
                        buttonMode='contained'
                        buttonSize='sm'
                        fullWidth={false}
                        disabled={isClient && status === 'granted'}
                        className={clsx('flex-1', 'md:flex-none')}
                        onClick={grant}
                    />
                </div>
            </div>
        </>

    )

}
