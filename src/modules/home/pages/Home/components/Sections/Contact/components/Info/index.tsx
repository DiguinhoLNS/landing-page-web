'use client'

import clsx from 'clsx'
import Link from 'next/link'
import contacts from '@/modules/home/constants/contacts'

export default function ContactInfo() {

    return(

        <>
            <div className={clsx('flex flex-col gap-4 w-full')}>
                <div>
                    <p className={clsx('text-base text-onSurface', 'md:text-lg')}>
                        Tem um projeto em mente ou apenas quer conversar? Envie uma mensagem ou entre em contato diretamente.
                    </p>
                </div>

                <div className={clsx('flex flex-col gap-2 w-full')}>
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className={clsx('flex items-baseline gap-4 w-full', 'text-sm')}
                        >
                            <p className={clsx('w-13', 'text-onSurface/70')}>
                                {contact.label}
                            </p>
                            
                            <Link
                                href={contact.link}
                                target='_blank'
                                className={clsx(
                                    'text-onSurface underline',
                                    'hover:text-primary'
                                )}
                                onClick={e => {
                                    if(contact.type === 'email') {
                                        e.preventDefault()
                                        window.location.href = contact.link
                                    }
                                }}
                            >
                                <p className={clsx('transition-colors')}>
                                    {contact.displayValue}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
    
}
