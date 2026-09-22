'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Icon from '@/components/common/Icon'
import usePressable from '@/hooks/usePressable'
import type { IJob } from '@/modules/home/interfaces/IJob'

const styles = {
    alta: {
        iconName: 'home_work',
        iconBox: 'bg-company-alta/15',
        textColor: 'text-company-alta',
        accent: 'bg-company-alta'
    },
    hwm: {
        iconName: 'school',
        iconBox: 'bg-company-hwm-variant/15',
        textColor: 'text-company-hwm-variant',
        accent: 'bg-company-hwm-variant'
    }
}

type JobCardProps = IJob & {
    current?: boolean
}

export default function JobCard({
    type,
    link,
    title,
    position,
    period,
    description,
    current
}: JobCardProps) {

    const style = styles[type as keyof typeof styles]

    const pressable = usePressable({ scale: 0.99, lift: true })

    return(

        <>
            <motion.a
                {...pressable}
                href={link}
                target='_blank'
                rel='noreferrer'
                className={clsx(
                    'group relative',
                    'flex flex-col gap-5 w-full p-5 rounded-[1.25rem] overflow-hidden',
                    'bg-elevation-1 border border-outlineVariant shadow-card',
                    'outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    'md:p-6'
                )}
            >
                <span aria-hidden className={clsx('absolute inset-x-0 top-0 h-px', style.accent, 'opacity-60')} />

                <div className={clsx('flex items-start justify-between gap-4 w-full')}>
                    <div className={clsx('flex items-center gap-4 min-w-0')}>
                        <div
                            className={clsx(
                                'flex shrink-0 items-center justify-center size-11 rounded-xl',
                                style.iconBox
                            )}
                        >
                            <Icon
                                iconName={style.iconName}
                                iconSize={22}
                                iconColor={clsx(style.textColor)}
                            />
                        </div>

                        <div className={clsx('flex flex-col min-w-0')}>
                            <p className={clsx('text-headline truncate', style.textColor)}>
                                {title}
                            </p>

                            <p className={clsx('text-footnote text-onSurfaceVariant truncate')}>
                                {position}
                            </p>
                        </div>
                    </div>

                    <Icon
                        iconName='arrow_outward'
                        iconSize={20}
                        iconColor={clsx('text-onSurfaceVariant')}
                        className={clsx(
                            'shrink-0 transition-transform duration-200 ease-out',
                            'group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                        )}
                    />
                </div>

                <div className={clsx('flex items-center gap-2')}>
                    {!!current && (
                        <span className={clsx('size-1.5 rounded-full bg-primary')} />
                    )}

                    <p className={clsx('text-caption text-onSurfaceVariant uppercase')}>
                        {period}
                    </p>
                </div>

                <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className={clsx('text-body text-onSurfaceVariant whitespace-pre-line')}
                />
            </motion.a>
        </>

    )

}
