'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Icon from '@/components/common/Icon'
import usePressable from '@/hooks/usePressable'
import contacts from '@/modules/home/constants/contacts'

export default function ContactInfo() {

    const pressable = usePressable({ scale: 0.985 })

    return(

        <>
            <div className={clsx('flex flex-col gap-6 w-full')}>
                <p className={clsx('max-w-md', 'text-body-lg text-onSurfaceVariant text-pretty')}>
                    Tem um projeto em mente ou apenas quer conversar? Envie uma mensagem ou entre em contato diretamente.
                </p>

                <div className={clsx('flex flex-col gap-2 w-full')}>
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            {...pressable}
                            href={contact.link}
                            target={contact.type === 'email' ? undefined : '_blank'}
                            rel={contact.type === 'email' ? undefined : 'noreferrer'}
                            className={clsx(
                                'group',
                                'flex items-center gap-4 w-full p-3 rounded-2xl',
                                'bg-elevation-1 border border-outlineVariant',
                                'outline-none focus-visible:ring-2 focus-visible:ring-primary'
                            )}
                        >
                            <div className={clsx('flex shrink-0 items-center justify-center size-10 rounded-xl bg-primary/12')}>
                                <Icon
                                    iconName={contact.icon}
                                    iconSize={20}
                                    iconColor={clsx('text-primary')}
                                />
                            </div>

                            <div className={clsx('flex flex-col min-w-0')}>
                                <p className={clsx('text-caption text-onSurfaceVariant uppercase')}>
                                    {contact.label}
                                </p>

                                <p className={clsx('text-body text-onSurface truncate')}>
                                    {contact.displayValue}
                                </p>
                            </div>

                            <Icon
                                iconName='arrow_outward'
                                iconSize={18}
                                iconColor={clsx('text-onSurfaceVariant')}
                                className={clsx(
                                    'ml-auto shrink-0 transition-transform duration-200 ease-out',
                                    'group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                                )}
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </>

    )

}
