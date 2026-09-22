'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Icon from '@/components/common/Icon'
import usePressable from '@/hooks/usePressable'
import springs from '@/utils/motion/springs'
import type { TabButtonProps } from '../../types'

export default function TabButton({
    icon,
    label,
    active,
    standaloneIndicator = true,
    onClick
}: TabButtonProps) {

    const pressable = usePressable({ scale: 0.96 })

    return(

        <>
            <motion.button
                {...pressable}
                type='button'
                role='tab'
                aria-selected={active}
                className={clsx(
                    'relative',
                    'w-full h-10 px-4 rounded-full cursor-pointer',
                    'outline-none focus-visible:ring-2 focus-visible:ring-primary'
                )}
                onClick={onClick}
            >
                {(standaloneIndicator && active) && (
                    <motion.span
                        aria-hidden
                        layoutId='active-tab-indicator'
                        className={clsx('absolute inset-0', 'rounded-full bg-onSurface/10')}
                        transition={springs.move}
                    />
                )}

                <span
                    className={clsx(
                        'z-10 relative',
                        'flex justify-center items-center gap-2 w-full h-full pointer-events-none'
                    )}
                >
                    {!!icon && (
                        <Icon
                            iconName={icon}
                            iconSize={20}
                            iconColor={clsx(
                                'transition-colors duration-150',
                                active ? 'text-onSurface' : 'text-onSurfaceVariant'
                            )}
                        />
                    )}

                    <span
                        className={clsx(
                            'transition-colors duration-150',
                            'text-footnote font-medium text-center',
                            active ? 'text-onSurface' : 'text-onSurfaceVariant'
                        )}
                    >
                        {label}
                    </span>
                </span>
            </motion.button>
        </>

    )

}
