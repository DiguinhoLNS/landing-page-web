'use client'

import clsx from 'clsx'
import Chip from '@/components/common/Chip'
import Button from '@/components/common/Button'
import useIsClient from '@/hooks/useIsClient'
import { consentStatusLabel, consentStatusVariant } from '@/modules/legal/constants/consentStatus'
import useCookieConsentStore from '@/stores/cookieConsent'

export default function PrivacyPolicyConsentControls() {

    const isClient = useIsClient()

    const { status, updatedAt, grant, deny } = useCookieConsentStore()

    const chipStatus = isClient ? status : 'pending'

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

                        <Chip
                            label={consentStatusLabel[chipStatus]}
                            variant={consentStatusVariant[chipStatus]}
                        />
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
