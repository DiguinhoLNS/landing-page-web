import clsx from 'clsx'
import Chip from '@/components/common/Chip'
import Icon from '@/components/common/Icon'
import type { IBusinessProject } from '@/modules/home/interfaces/IBusinessProject'

type BusinessProjectCardProps = IBusinessProject

export default function BusinessProjectCard({
    icon,
    title,
    description,
    company,
    companyColor
}: BusinessProjectCardProps) {

    return(

        <>
            <div
                className={clsx(
                    'flex flex-col gap-4 w-full h-full p-5 rounded-[1.25rem]',
                    'bg-elevation-1 border border-outlineVariant shadow-card',
                    'md:p-6'
                )}
            >
                <div className={clsx('flex items-center gap-4 min-w-0')}>
                    <div className={clsx('flex shrink-0 items-center justify-center size-12 rounded-xl bg-primary/12')}>
                        <Icon
                            iconName={icon}
                            iconSize={24}
                            iconColor={clsx('text-primary')}
                        />
                    </div>

                    <h3 className={clsx('text-title text-onSurface')}>
                        {title}
                    </h3>
                </div>

                <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className={clsx('flex-1 text-body text-onSurfaceVariant')}
                />

                <Chip
                    label={company}
                    dotColor={companyColor}
                />
            </div>
        </>

    )

}
