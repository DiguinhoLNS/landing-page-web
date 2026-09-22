'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import usePressable from '@/hooks/usePressable'
import Icon from '../Icon'
import ClickOverlay from '../ClickOverlay'
import type { IBaseButtonProps, TButtonMode, TButtonSize } from '@/components/common/Button/types'
import type { IconProps } from '../Icon/types'

interface IconButtonProps extends IBaseButtonProps, IconProps {
    selected?: boolean
}

const variantStyles: Record<string, Record<TButtonMode, string>> = {
    'selected': {
        default: 'text-onSurface',
        outlined: 'bg-inverseSurface text-inverseOnSurface',
        contained: 'bg-primary text-onPrimary',
        'contained-tonal': 'bg-secondaryContainer text-onSecondaryContainer',
        glass: 'material-control text-onSurface'
    },
    'noSelected': {
        default: 'text-onSurfaceVariant',
        outlined: 'border border-outline text-onSurfaceVariant',
        contained: 'bg-surfaceVariant text-primary',
        'contained-tonal': 'bg-surfaceVariant text-onSurfaceVariant',
        glass: 'material-control text-onSurfaceVariant'
    },
    'disabled': {
        default: 'text-onSurfaceDisabled',
        outlined: 'text-onSurfaceDisabled bg-surfaceDisabled border-surfaceDisabled',
        contained: 'text-onSurfaceDisabled bg-surfaceDisabled',
        'contained-tonal': 'text-onSurfaceDisabled bg-surfaceDisabled',
        glass: 'text-onSurfaceDisabled bg-surfaceDisabled'
    }
}

const sizeStyles: Record<TButtonSize, string> = {
    sm: 'size-9',
    md: 'size-10',
    lg: 'size-12'
}

export default function IconButton({
    handleRef,
    buttonMode = 'default',
    buttonSize = 'md',
    buttonColor,
    iconName,
    iconColor,
    iconSize,
    iconVariant,
    selected = true,
    disabled = false,
    className,
    ...props
}: IconButtonProps) {

    const pressable = usePressable({ scale: 0.92, disabled })

    const currentVariant = disabled ? 'disabled' : selected ? 'selected' : 'noSelected'

    const styles = variantStyles[currentVariant][buttonMode]
    const size = sizeStyles[buttonSize]

    return(

        <>
            <motion.button
                {...props}
                {...pressable}
                ref={handleRef}
                disabled={disabled}
                className={clsx(
                    'group relative shrink-0',
                    'flex items-center justify-center rounded-full overflow-hidden',
                    'outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
                    styles,
                    size,
                    buttonColor,
                    disabled ? 'pointer-events-none' : 'cursor-pointer',
                    className
                )}
            >
                <ClickOverlay disabled={disabled} />

                <Icon
                    {...{
                        iconName,
                        iconColor,
                        iconVariant,
                        iconSize
                    }}
                    className={clsx('z-10 relative')}
                />
            </motion.button>
        </>

    )

}
