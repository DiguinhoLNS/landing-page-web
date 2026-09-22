import clsx from 'clsx'

interface ChipProps {
    label: string
    variant?: 'default' | 'success' | 'warning' | 'error'
    backgroundColor?: string
    textColor?: string
    dotColor?: string
    className?: string
}

const variantStyles: Record<string, string> = {
    default: 'bg-surfaceVariant text-onSurfaceVariant',
    success: 'bg-successContainer text-onSuccessContainer',
    warning: 'bg-warningContainer text-onWarningContainer',
    error: 'bg-errorContainer text-onErrorContainer'
}

export default function Chip({
    label,
    variant = 'default',
    backgroundColor,
    textColor,
    dotColor,
    className
}: ChipProps) {

    const styles = variantStyles[variant]

    return(

        <>
            <span
                className={clsx(
                    'inline-flex shrink-0 self-start items-center gap-2 h-7 px-3 rounded-full',
                    'text-caption font-medium whitespace-nowrap',
                    (!backgroundColor && !textColor) && styles,
                    backgroundColor,
                    textColor,
                    className
                )}
            >
                {!!dotColor && (
                    <span
                        aria-hidden
                        className={clsx('size-2 shrink-0 rounded-full ring-1 ring-onSurface/15', dotColor)}
                    />
                )}

                {label}
            </span>
        </>

    )

}
