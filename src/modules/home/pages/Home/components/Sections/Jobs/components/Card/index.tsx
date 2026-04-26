import clsx from 'clsx'
import Link from 'next/link'
import Icon from '@/components/common/Icon'
import type { IJob } from '@/modules/home/interfaces/IJob'

const styles = {
    alta: {
        iconName: 'home_work',
        background: 'bg-company-alta/10',
        border: 'border-company-alta',
        iconBox: 'bg-company-alta/20',
        textColor: 'text-company-alta',
    },
    hwm: {
        iconName: 'school',
        background: 'bg-company-hwm/10',
        border: 'border-company-hwm',
        iconBox: 'bg-company-hwm/20',
        textColor: 'text-company-hwm',
    }
}

type JobCardProps = IJob

export default function JobCard({
    type,
    link,
    title,
    position,
    period
}: JobCardProps) {

    const style = styles[type as keyof typeof styles]

    return(

        <>
            <Link
                href={link}
                target='_blank'
                className={clsx(
                    'group',
                    'flex flex-col gap-2 w-full border rounded-2xl p-6 default-click-animation',
                    style.background,
                    style.border
                )}
            >
                <div className={clsx('flex items-start justify-between w-full')}>
                    <div className={clsx('flex flex-col gap-1')}>
                        <div className={clsx('flex items-center justify-center size-10 rounded-lg', style.iconBox)}>
                            <Icon
                                iconName={style.iconName}
                                iconSize={20}
                                iconColor={clsx(style.textColor)}
                            />
                        </div>

                        <p className={clsx('font-medium text-xl', style.textColor)}>
                            {title}
                        </p>
                    </div>
                    
                    <Icon
                        iconName='call_made'
                        iconSize={20}
                        iconColor={clsx(style.textColor)}
                        className={clsx('group-hover:translate-x-1 group-hover:-translate-y-1')}
                    />
                </div>

                <div className={clsx('flex flex-col')}>
                    <p className={clsx('text-onSurface/90')}>
                        {position}
                    </p>

                    <p className={clsx('text-onSurface/70')}>
                        {period}
                    </p>
                </div>
            </Link>
        </>

    )

}
