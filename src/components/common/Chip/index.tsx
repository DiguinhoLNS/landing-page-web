import clsx from 'clsx'

interface ChipProps {
    label: string
    variant?: 'default' | 'success' | 'warning' | 'error'
}

const variantStyles: Record<string, string> = {
    default: 'bg-surfaceVariant text-onSurfaceVariant',
    success: 'bg-successContainer text-onSuccessContainer',
    warning: 'bg-warningContainer text-onWarningContainer',
    error: 'bg-errorContainer text-onErrorContainer',
}

export default function Chip({
    label,
    variant = 'default'
}: ChipProps) {

    const styles = variantStyles[variant]

    return(

        <>
            <div
                className={clsx('flex items-center h-6 px-4 rounded-full', styles)}
            >
                <p className={clsx('text-xs')}>
                    {label}
                </p>
            </div>
        </>

    )

}
