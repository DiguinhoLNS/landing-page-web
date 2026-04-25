import clsx from 'clsx'
import type { IContribution } from '@/modules/home/interfaces/IContribution'

type ContributionCardProps = IContribution

export default function ContributionCard({
    title,
    description,
    company,
    backgroundColor
}: ContributionCardProps) {

    return (

        <>
            <div
                className={clsx(
                    'flex flex-col items-start gap-1 p-6',
                    backgroundColor
                )}
            >
                <p className={clsx('font-medium text-white text-xl')}>
                    {title}
                </p>

                <div className={clsx('flex-1')}>
                    <p className={clsx('text-white/90 text-base')}>
                        {description}
                    </p>
                </div>

                <div className={clsx('flex justify-end w-full')}>
                    <p className={clsx('text-white/60 text-[10px]')}>
                        {company}
                    </p>
                </div>
            </div>
        </>

    )
}
