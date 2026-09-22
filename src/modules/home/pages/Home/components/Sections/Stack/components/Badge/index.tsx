import clsx from 'clsx'
import type { IStackItem } from '@/modules/home/interfaces/IStackItem'

type StackBadgeProps = IStackItem

/** Marcas claras (JavaScript, React, Firebase...) pedem ícone escuro — como o `logoColor=black` dos badges. */
function isLightColor(hex: string) {

    const value = parseInt(hex.replace('#', ''), 16)

    const r = (value >> 16) & 255
    const g = (value >> 8) & 255
    const b = value & 255

    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62

}

export default function StackBadge({
    name,
    color,
    iconPath,
    monogram
}: StackBadgeProps) {

    const light = isLightColor(color)

    return(

        <>
            <div
                className={clsx(
                    'flex items-center gap-2.5 h-10 pl-1.5 pr-3.5 rounded-xl',
                    'bg-elevation-1 border border-outlineVariant shadow-card'
                )}
            >
                <span
                    aria-hidden
                    className={clsx(
                        'flex shrink-0 items-center justify-center size-7 rounded-lg',
                        'ring-1 ring-inset ring-white/10',
                        light ? 'text-black/85' : 'text-white'
                    )}
                    style={{ backgroundColor: color }}
                >
                    {iconPath ? (
                        <svg viewBox='0 0 24 24' className={clsx('size-4')} fill='currentColor'>
                            <path d={iconPath} />
                        </svg>
                    ) : (
                        <span className={clsx('text-[0.625rem] font-bold leading-none tracking-tight')}>
                            {monogram}
                        </span>
                    )}
                </span>

                <span className={clsx('text-footnote font-medium text-onSurface whitespace-nowrap')}>
                    {name}
                </span>
            </div>
        </>

    )

}
