'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Chip from '@/components/common/Chip'
import Icon from '@/components/common/Icon'
import usePressable from '@/hooks/usePressable'
import { projectStatusLabel, projectStatusVariant } from '@/modules/home/constants/projectStatus'
import type { IPersonalProject } from '@/modules/home/interfaces/IPersonalProject'

type PersonalProjectCardProps = IPersonalProject

export default function PersonalProjectCard({
    icon,
    link,
    repository,
    title,
    description,
    status,
    tags
}: PersonalProjectCardProps) {

    const href = link || repository

    const pressable = usePressable({ scale: 0.99, lift: true, disabled: !href })

    const className = clsx(
        'group',
        'flex flex-col gap-4 w-full h-full p-5 rounded-[1.25rem]',
        'bg-elevation-1 border border-outlineVariant shadow-card',
        'md:p-6',
        !!href && 'cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary'
    )

    const content = (
        <>
            <div className={clsx('flex items-start justify-between gap-4 w-full')}>
                <div className={clsx('flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/12')}>
                    <Icon
                        iconName={icon}
                        iconSize={24}
                        iconColor={clsx('text-primary')}
                    />
                </div>

                <div className={clsx('flex items-center gap-3')}>
                    <Chip
                        label={projectStatusLabel[status]}
                        variant={projectStatusVariant[status]}
                    />

                    {!!href && (
                        <Icon
                            iconName='arrow_outward'
                            iconSize={20}
                            iconColor={clsx('text-onSurfaceVariant')}
                            className={clsx(
                                'shrink-0 transition-transform duration-200 ease-out',
                                'group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                            )}
                        />
                    )}
                </div>
            </div>

            <div className={clsx('flex flex-1 flex-col gap-1.5')}>
                <h3
                    className={clsx(
                        'text-title text-onSurface transition-colors duration-150',
                        !!href && 'group-hover:text-primary'
                    )}
                >
                    {title}
                </h3>

                <p className={clsx('text-body text-onSurfaceVariant')}>
                    {description}
                </p>
            </div>

            <div className={clsx('flex flex-wrap gap-2 w-full')}>
                {tags.map((item, index) => (
                    <Chip key={index} label={item} />
                ))}
            </div>
        </>
    )

    if (!href) {
        return(
            <div className={className}>
                {content}
            </div>
        )
    }

    return(

        <>
            <motion.a
                {...pressable}
                href={href}
                target='_blank'
                rel='noreferrer'
                className={className}
            >
                {content}
            </motion.a>
        </>

    )

}
