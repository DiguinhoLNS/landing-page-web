import clsx from 'clsx'
import Chip from '@/components/common/Chip'
import Icon from '@/components/common/Icon'
import flags from '@/constants/flags'
import Button from '@/components/common/Button'
import type { IPersonalProject } from '@/modules/home/interfaces/IPersonalProject'
import { projectStatusLabel, projectStatusVariant } from '@/modules/home/constants/projectStatus'

type PersonalProjectCardProps = IPersonalProject

export default function PersonalProjectCard({
    icon,
    link,
    repositories = [],
    title,
    description,
    status,
    tags,
    pinned
}: PersonalProjectCardProps) {

    const hasActions = flags.projectLinks && (!!link || repositories.length > 0)

    return(

        <>
            <div
                className={clsx(
                    'flex flex-col gap-4 w-full h-full p-5 rounded-[1.25rem]',
                    'bg-elevation-1 border border-outlineVariant shadow-card',
                    'md:p-6'
                )}
            >
                <div className={clsx('flex items-start justify-between gap-4 w-full')}>
                    <div className={clsx('flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/12')}>
                        <Icon
                            iconName={icon}
                            iconSize={24}
                            iconColor={clsx('text-primary')}
                        />
                    </div>

                    <div className={clsx('flex items-center gap-2')}>
                        {pinned && (
                            <span title='Fixado' className={clsx('flex')}>
                                <Icon
                                    iconName='keep'
                                    iconSize={20}
                                    iconColor={clsx('text-primary')}
                                    className={clsx('[font-variation-settings:"FILL"_1]')}
                                />
                            </span>
                        )}

                        <Chip
                            label={projectStatusLabel[status]}
                            variant={projectStatusVariant[status]}
                        />
                    </div>
                </div>

                <div className={clsx('flex flex-1 flex-col gap-1.5')}>
                    <h3 className={clsx('text-title text-onSurface')}>
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

                {hasActions && (
                    <div className={clsx('flex flex-wrap justify-end gap-2 w-full pt-4 border-t border-outlineVariant')}>
                        {repositories.map(repository => (
                            <Button
                                key={repository.link}
                                href={repository.link}
                                buttonMode='outlined'
                                buttonSize='sm'
                                label={repository.title ?? 'Repositório'}
                                iconName={repository.icon ?? 'code'}
                                iconSize={18}
                                fullWidth={false}
                            />
                        ))}

                        {!!link && (
                            <Button
                                href={link}
                                buttonMode='contained-tonal'
                                buttonSize='sm'
                                label='Acessar'
                                iconName='arrow_outward'
                                iconSize={18}
                                iconPosition='right'
                                fullWidth={false}
                            />
                        )}
                    </div>
                )}
            </div>
        </>

    )

}
