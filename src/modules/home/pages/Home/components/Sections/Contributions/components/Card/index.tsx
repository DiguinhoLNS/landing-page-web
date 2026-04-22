import clsx from 'clsx'

interface ContributionCardProps {
    title: string
    description?: string
    company?: string
    backgroundColor: string
}

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
                    'flex flex-col items-start gap-1 p-4',
                    backgroundColor
                )}
            >
                <p className={clsx('font-medium text-white text-xl text-center')}>
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
