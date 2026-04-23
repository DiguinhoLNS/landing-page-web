import clsx from 'clsx'
import Container from '../Container'

interface SectionProps {
    children?: React.ReactNode
    id?: string
    className?: string
    contentClassName?: string
}

export default function Section({
    children,
    id,
    className,
    contentClassName
}: SectionProps) {

    return(

        <>
            <section
                id={id}
                className={clsx(
                    'w-full py-10',
                    className
                )}
            >
                <Container className={contentClassName}>
                    {children}
                </Container>
            </section>
        </>

    )

}
