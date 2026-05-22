import clsx from 'clsx'

interface ChipProps {
    label: string
    variant?: 'default' | 'success' | 'warning' | 'error'
    backgroundColor?: string
    textColor?: string
}

const variantStyles: Record<string, string> = {
    default: 'bg-surfaceVariant text-onSurfaceVariant',
    success: 'bg-successContainer text-onSuccessContainer',
    warning: 'bg-warningContainer text-onWarningContainer',
    error: 'bg-errorContainer text-onErrorContainer',
}

export default function Chip({
    label,
    variant = 'default',
    backgroundColor,
    textColor
}: ChipProps) {

    const styles = variantStyles[variant]

    return(

        <>
            <div
                className={clsx(
                    'flex items-center h-6 px-4 rounded-full',
                    (!backgroundColor && !textColor) && styles,
                    backgroundColor,
                    textColor
                )}
            >
                <p className={clsx('text-xs')}>
                    {label}
                </p>
            </div>
        </>

    )

}
