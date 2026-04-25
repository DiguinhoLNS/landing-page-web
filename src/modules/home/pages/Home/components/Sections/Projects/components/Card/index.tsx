import clsx from 'clsx'
import Link from 'next/link'
import Chip from '@/components/common/Chip'
import Icon from '@/components/common/Icon'
import type { IProject } from '@/modules/home/interfaces/IProject'

type ProjectCardProps = IProject

export default function ProjectCard({
    icon,
    link,
    repository,
    title,
    description,
    status,
    tags
}: ProjectCardProps) {

    const statusLabel = status === 'concluded' ? 'Finalizado' : 'Em desenvolvimento'
    const statusVariant = status === 'concluded' ? 'success' : 'warning'

    return(

        <>
            <Link
                href={link || repository || '#'}
                target='_blank'
                className={clsx(
                    'group',
                    'flex flex-col gap-4 w-full p-6 border border-outline rounded-lg bg-elevation-1 default-click-animation',
                    'md:flex-row'
                )}
            >
                <div className={clsx('flex shrink-0 justify-between')}>
                    <div className={clsx('flex items-center justify-center size-14 rounded-lg bg-primary/20')}>
                        <Icon
                            iconName={icon}
                            iconSize={24}
                            iconColor={clsx('text-primary')}
                        />
                    </div>

                    <div className={clsx('block md:hidden')}>
                        <Icon
                            iconName='call_made'
                            iconSize={24}
                            iconColor={clsx('text-onSurfaceVariant')}
                            className={clsx('group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1' )}
                        />
                    </div>
                </div>      

                <div className={clsx('flex flex-1 flex-col gap-4')}>
                    <div className={clsx('flex flex-col items-start gap-1 w-full')}>
                        <div className={clsx('flex items-start justify-between w-full')}>
                            <h3
                                className={clsx(
                                    'transition-colors',
                                    'font-semibold text-onSurfaceVariant text-2xl',
                                    'group-hover:text-primary'
                                )}
                            >
                                {title}
                            </h3>

                            <div className={clsx('hidden md:block')}>
                                <Icon
                                    iconName='call_made'
                                    iconSize={24}
                                    iconColor={clsx('text-onSurfaceVariant')}
                                    className={clsx('group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1')}
                                />
                            </div>
                        </div>

                        <p className={clsx('text-onSurfaceVariant text-base')}>
                            {description}
                        </p>
                    </div>

                    <div className={clsx('flex gap-2 flex-wrap w-full')}>
                        {!!status && (
                            <Chip
                                label={statusLabel}
                                variant={statusVariant}
                            />
                        )}

                        {tags.map((item, index) => (
                            <Chip
                                key={index}
                                label={item}
                            />
                        ))}
                    </div>
                </div>       
            </Link>
        </>

    )

}
