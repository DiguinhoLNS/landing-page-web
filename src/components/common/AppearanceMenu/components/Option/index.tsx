'use client'

import clsx from 'clsx'
import Icon from '@/components/common/Icon'
import ClickOverlay from '@/components/common/ClickOverlay'
import type { AppearanceMenuOptionProps } from '../../types'

export default function AppearanceMenuOption({
    label,
    leading,
    selected,
    onSelect
}: AppearanceMenuOptionProps) {

    return(

        <>
            <button
                type='button'
                role='menuitemradio'
                aria-checked={selected}
                className={clsx(
                    'group relative overflow-hidden',
                    'flex items-center gap-3 w-full h-11 px-3 rounded-2xl cursor-pointer',
                    'text-onSurface',
                    'outline-none focus-visible:ring-2 focus-visible:ring-primary'
                )}
                onClick={onSelect}
            >
                <ClickOverlay />

                <span
                    aria-hidden
                    className={clsx('z-10 relative', 'flex items-center justify-center size-6 text-onSurfaceVariant')}
                >
                    {leading}
                </span>

                <span
                    className={clsx(
                        'z-10 relative flex-1',
                        'text-body text-left',
                        selected ? 'font-medium text-onSurface' : 'text-onSurfaceVariant'
                    )}
                >
                    {label}
                </span>

                {selected && (
                    <span aria-hidden className={clsx('z-10 relative', 'flex')}>
                        <Icon
                            iconName='check'
                            iconSize={20}
                            iconColor={clsx('text-primary')}
                        />
                    </span>
                )}
            </button>
        </>

    )

}
