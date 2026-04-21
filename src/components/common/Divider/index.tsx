import clsx from 'clsx'

interface DividerProps {
    label?: string
}

export default function Divider({
    label,
}: DividerProps) {

    return(

        <>
            <div className={clsx('relative', 'flex items-center')}>
                <div className={clsx('grow border-t border-outline/40')} />

                {label && (
                    <span className={clsx('shrink mx-4 text-onSurface text-sm')}>{label}</span>
                )}

                <div className={clsx('grow border-t border-outline/40')} />
            </div>
        </>

    )

}
