import clsx from 'clsx'
import Container from '../Container'

interface SectionProps {
    children?: React.ReactNode
    className?: string
}

export default function Section({
    children,
    className,
}: SectionProps) {

    return(

        <>
            <section
                className={clsx(
                    'w-full',
                    'not-last-of-type:mb-4',
                    className
                )}
            >
                <Container>
                    {children}
                </Container>
            </section>
        </>

    )

}
