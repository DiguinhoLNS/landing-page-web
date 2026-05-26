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
                    'group',
                    'flex flex-col gap-4 w-full p-4 border border-outline rounded-2xl bg-elevation-1',
                    'md:p-6 lg:flex-row'
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
                                'lg:hidden'
                            )}
                        >
                            {title}
                        </h3>
                    </div>
                </div>

                <div className={clsx('flex flex-1 flex-col justify-between gap-4')}>
                    <div className={clsx('flex flex-col items-start gap-1 w-full')}>
                        <h3
                            className={clsx(
                                'hidden',
                                'transition-colors',
                                'font-semibold text-onSurfaceVariant text-2xl',
                                'lg:block'
                            )}
                        >
                            {title}
                        </h3>

                        <p
                            dangerouslySetInnerHTML={{ __html: description }}
                            className={clsx('text-onSurfaceVariant text-base')}
                        />
                    </div>

                    <div className={clsx('flex gap-2 flex-wrap w-full')}>
                        <Chip
                            label={company}
                            backgroundColor={companyColor}
                            textColor='text-white'
                        />
                    </div>
                </div>
            </div>
        </>

    )

}