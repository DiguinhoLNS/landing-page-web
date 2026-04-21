import clsx from 'clsx'

interface ContainerProps {
    children?: React.ReactNode
    className?: string
}

export default function Container({
    children,
    className,
}: ContainerProps) {

    return(

        <>
            <div
                className={clsx(
                    'w-full max-w-7xl px-4 mx-auto',
                    className
                )}
            >
                {children}
            </div>
        </>

    )

}
