import clsx from 'clsx'
import Link from 'next/link'
import Icon from '@/components/common/Icon'

const styles = {
    alta: {
        iconName: 'home_work',
        background: 'bg-company-alta/60',
        border: 'border-company-alta',
        iconBox: 'bg-company-alta/90',
    },
    hwm: {
        iconName: 'domain',
        background: 'bg-company-hwm/60',
        border: 'border-company-hwm',
        iconBox: 'bg-company-hwm/90',
    }
}

interface JobCardProps {
    type: string
    link: string
    title: string
    position: string
    period: string
}

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
                    'flex flex-col gap-2 w-full border rounded-lg p-4 default-click-animation',
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
                                iconColor={clsx('text-white')}
                            />
                        </div>

                        <p className={clsx('font-medium text-white text-xl')}>
                            {title}
                        </p>
                    </div>
                    
                    <Icon
                        iconName='link_2'
                        iconSize={14}
                        iconColor={clsx('text-white/60')}
                    />
                </div>

                <div className={clsx('flex flex-col')}>
                    <p className={clsx('text-white/90')}>
                        {position}
                    </p>

                    <p className={clsx('text-white/70')}>
                        {period}
                    </p>
                </div>
            </Link>
        </>

    )

}
