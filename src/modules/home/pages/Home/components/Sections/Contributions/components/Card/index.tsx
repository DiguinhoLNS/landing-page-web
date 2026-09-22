import clsx from 'clsx'
import type { IContribution } from '@/modules/home/interfaces/IContribution'

type ContributionCardProps = IContribution

export default function ContributionCard({
    title,
    description,
    company,
    backgroundColor
}: ContributionCardProps) {

    return(

        <>
            <div
                className={clsx(
                    'flex flex-col gap-2 w-full h-full p-5 rounded-[1.25rem]',
                    'bg-elevation-1 border border-outlineVariant shadow-card'
                )}
            >
                <div className={clsx('flex items-center gap-2.5')}>
                    <span
                        aria-hidden
                        className={clsx('size-2.5 shrink-0 rounded-full', backgroundColor)}
                    />

                    <p className={clsx('text-headline text-onSurface')}>
                        {title}
                    </p>
                </div>

                <p className={clsx('flex-1 text-footnote text-onSurfaceVariant')}>
                    {description}
                </p>

                <p className={clsx('text-caption text-onSurfaceVariant/70 lowercase')}>
                    {company}
                </p>
            </div>
        </>

    )

}
