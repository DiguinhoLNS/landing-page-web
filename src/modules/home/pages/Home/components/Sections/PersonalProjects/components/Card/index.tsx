import clsx from 'clsx'
import Link from 'next/link'
import Chip from '@/components/common/Chip'
import Icon from '@/components/common/Icon'
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

    const statusLabel = status === 'concluded' ? 'Finalizado' : 'Em desenvolvimento'
    const statusVariant = status === 'concluded' ? 'success' : 'warning'

    return(

        <>
            <Link
                href={link || repository || '#'}
                target='_blank'
                className={clsx(
                    'group',
                    'flex flex-col gap-4 w-full p-4 border border-outline rounded-2xl bg-elevation-1 default-click-animation',
                    'md:flex-row'
                )}
            >
                <div className={clsx('flex shrink-0 items-start justify-between')}>
                    <div className={clsx('flex items-center gap-4')}>
                        <div className={clsx('flex shrink-0 items-center justify-center size-14 rounded-lg bg-primary/10')}>
                            <Icon
                                iconName={icon}
                                iconSize={24}
                                iconColor={clsx('text-primary')}
                            />
                        </div>

                        <h3
                            className={clsx(
                                'transition-colors',
                                'font-semibold text-onSurfaceVariant text-2xl',
                                'group-hover:text-primary',
                                'md:hidden'
                            )}
                        >
                            {title}
                        </h3>
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

                <div className={clsx('flex flex-1 flex-col justify-between gap-4')}>
                    <div className={clsx('flex flex-col items-start gap-1 w-full')}>
                        <div className={clsx('hidden items-start justify-between w-full', 'md:flex')}>
                            <h3
                                className={clsx(
                                    'transition-colors',
                                    'font-semibold text-onSurfaceVariant text-2xl',
                                    'group-hover:text-primary'
                                )}
                            >
                                {title}
                            </h3>

                            <Icon
                                iconName='call_made'
                                iconSize={24}
                                iconColor={clsx('text-onSurfaceVariant')}
                                className={clsx('group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1')}
                            />
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
