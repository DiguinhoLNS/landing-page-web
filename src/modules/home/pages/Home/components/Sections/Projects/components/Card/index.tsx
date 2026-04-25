import clsx from 'clsx'
import Link from 'next/link'
import Icon from '@/components/common/Icon'
import type { IProject } from '@/modules/home/interfaces/IProject'

type ProjectCardProps = IProject

export default function ProjectCard({
    icon,
    link,
    repository,
    title,
    description,
    tags
}: ProjectCardProps) {

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
                <div className={clsx('shrink-0')}>
                    <div className={clsx('flex items-center justify-center size-14 rounded-lg bg-primary/20')}>
                        <Icon
                            iconName={icon}
                            iconSize={24}
                            iconColor={clsx('text-primary')}
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
                        {tags.map((item, index) => (
                            <div
                                key={index}
                                className={clsx('flex items-center h-6 px-3 rounded-full bg-surfaceVariant')}
                            >
                                <p className={clsx('text-onSurfaceVariant text-xs')}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>       
            </Link>
        </>

    )

}
