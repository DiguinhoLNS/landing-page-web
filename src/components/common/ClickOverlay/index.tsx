import clsx from 'clsx'

interface ClickOverlayProps {
    disabled?: boolean
}

export default function ClickOverlay({ disabled }: ClickOverlayProps) {

    if (disabled) return null

    return(

        <>
            <div
                aria-hidden
                className={clsx(
                    'z-1 absolute inset-0 pointer-events-none',
                    'bg-current opacity-0',
                    'transition-opacity duration-100 ease-out',
                    'group-hover:opacity-[0.08]',
                    'group-focus-visible:opacity-[0.10]',
                    'group-active:opacity-[0.12]'
                )}
            />
        </>

    )

}
