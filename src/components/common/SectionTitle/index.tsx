import clsx from 'clsx'
import Reveal from '../Reveal'

interface SectionTitleProps {
    label: string
    title: string
    description?: string
}

export default function SectionTitle({
    label,
    title,
    description
}: SectionTitleProps) {

    return(

        <>
            <div className={clsx('flex flex-col gap-3 max-w-2xl mb-10', 'md:mb-14')}>
                <Reveal>
                    <div className={clsx('flex items-center gap-3')}>
                        <span className={clsx('h-px w-6 bg-primary')} />

                        <p className={clsx('text-overline text-primary uppercase')}>
                            {label}
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.05}>
                    <h2 className={clsx('text-title-lg text-onSurface text-balance')}>
                        {title}
                    </h2>
                </Reveal>

                {!!description && (
                    <Reveal delay={0.1}>
                        <p className={clsx('text-body-lg text-onSurfaceVariant text-pretty')}>
                            {description}
                        </p>
                    </Reveal>
                )}
            </div>
        </>

    )

}
