import clsx from 'clsx'

interface ClickOverlayProps {
    disabled?: boolean
}

export default function ClickOverlay({ disabled }: ClickOverlayProps) {

    return(

        <>
            <div
                className={clsx(
                    'z-1 absolute inset-0',
                    'bg-current opacity-0 transition-opacity',
                    'hover:opacity-[0.08] focus-visible:opacity-[0.10] active:opacity-[0.10]',
                    !disabled && 'cursor-pointer',
                    disabled && 'pointer-events-none'
                )}
            />
        </>

    )

}
