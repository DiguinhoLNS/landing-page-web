import clsx from 'clsx'

interface SectionTitleProps {
    label: string
    title: string
}

export default function SectionTitle({
    label,
    title
}: SectionTitleProps) {

    return(

        <>
            <div className={clsx('flex flex-col mb-10')}>
                <p className={clsx('text-primary text-lg')}>
                    {label}
                </p>

                <h2 className={clsx('font-bold text-onSurface text-4xl')}>
                    {title}
                </h2>
            </div>
        </>

    )

}
