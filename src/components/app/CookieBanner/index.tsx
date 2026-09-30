'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import useIsClient from '@/hooks/useIsClient'
import { COOKIES_SECTION_ID, PRIVACY_POLICY_PATH } from '@/modules/legal/constants/routes'
import useCookieConsentStore from '@/stores/cookieConsent'
import springs, { crossFade } from '@/utils/motion/springs'

export default function CookieBanner() {

    const isClient = useIsClient()
    const reducedMotion = useReducedMotion()

    const status = useCookieConsentStore(state => state.status)
    const grant = useCookieConsentStore(state => state.grant)
    const deny = useCookieConsentStore(state => state.deny)

    const visible = isClient && status === 'pending'

    return(

        <div
            className={clsx(
                'z-110 fixed inset-x-0 bottom-0',
                'flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none',
                'md:pb-6'
            )}
        >
            <AnimatePresence>
                {visible && (
                    <motion.div
                        role='region'
                        aria-label='Consentimento de cookies'
                        className={clsx(
                            'flex flex-col gap-4 w-full max-w-3xl p-5 rounded-3xl pointer-events-auto',
                            'material-sheet material-edge',
                            'md:flex-row md:items-center md:gap-6'
                        )}
                        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
                        animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
                        transition={reducedMotion ? crossFade : springs.sheet}
                    >
                        <div className={clsx('flex flex-1 items-start gap-3 min-w-0')}>
                            <div className={clsx('flex shrink-0 items-center justify-center size-10 rounded-xl bg-primary/12')}>
                                <Icon
                                    iconName='cookie'
                                    iconSize={20}
                                    iconColor={clsx('text-primary')}
                                />
                            </div>

                            <div className={clsx('flex flex-col gap-1 min-w-0')}>
                                <p className={clsx('text-body font-medium text-onSurface')}>
                                    Este site usa cookies
                                </p>

                                <p className={clsx('text-footnote vibrant-secondary text-pretty')}>
                                    Utilizamos cookies e tecnologias semelhantes para entender como o site é
                                    usado e melhorar a sua experiência. Você pode aceitar ou recusar os
                                    cookies de análise.{' '}
                                    <Link
                                        href={`${PRIVACY_POLICY_PATH}#${COOKIES_SECTION_ID}`}
                                        className={clsx(
                                            'text-primary underline underline-offset-2 rounded-sm',
                                            'outline-none focus-visible:ring-2 focus-visible:ring-primary'
                                        )}
                                    >
                                        Política de privacidade
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className={clsx('flex shrink-0 gap-2')}>
                            <Button
                                label='Recusar'
                                buttonMode='outlined'
                                buttonSize='sm'
                                fullWidth={false}
                                className={clsx('flex-1', 'md:flex-none')}
                                onClick={deny}
                            />

                            <Button
                                label='Aceitar'
                                buttonMode='contained'
                                buttonSize='sm'
                                fullWidth={false}
                                className={clsx('flex-1', 'md:flex-none')}
                                onClick={grant}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    )

}
