'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import usePressable from '@/hooks/usePressable'
import Icon from '../../../Icon'
import ClickOverlay from '../../../ClickOverlay'
import type { ButtonProps, TButtonMode, TButtonSize } from '../../types'

const variantStyles: Record<string, Record<TButtonMode, string>> = {
    active: {
        default: 'text-primary',
        outlined: 'text-onSurface border border-outline',
        contained: 'bg-primary text-onPrimary',
        'contained-tonal': 'bg-secondaryContainer text-onSecondaryContainer',
        glass: 'material-control text-onSurface'
    },
    disabled: {
        default: 'text-onSurfaceDisabled',
        outlined: 'text-onSurfaceDisabled border border-surfaceDisabled',
        contained: 'bg-surfaceDisabled text-onSurfaceDisabled',
        'contained-tonal': 'bg-surfaceDisabled text-onSurfaceDisabled',
        glass: 'bg-surfaceDisabled text-onSurfaceDisabled'
    }
}

const sizeStyles: Record<TButtonSize, string> = {
    sm: 'h-9 px-4 text-footnote',
    md: 'h-11 px-5 text-body',
    lg: 'h-12 px-6 text-body-lg'
}

type BaseButtonProps = Omit<ButtonProps, 'href' | 'target'>

export default function Button({
    handleRef,
    type = 'button',
    label,
    buttonMode = 'default',
    buttonSize = 'md',
    buttonColor,
    textColor,
    iconName,
    iconColor,
    iconSize,
    iconVariant,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    fullWidth = true,
    className,
    ...props
}: BaseButtonProps) {

    const isDisabled = disabled || loading

    const pressable = usePressable({ scale: 0.97, disabled: isDisabled })

    const currentVariant = isDisabled ? 'disabled' : 'active'

    const leadingIcon = loading ? 'progress_activity' : iconName

    const styles = variantStyles[currentVariant][buttonMode]
    const size = sizeStyles[buttonSize]

    return(

        <>
            <motion.button
                {...props}
                {...pressable}
                ref={handleRef}
                type={type}
                disabled={isDisabled}
                aria-busy={loading || undefined}
                className={clsx(
                    'group relative',
                    'flex items-center justify-center gap-2 rounded-full overflow-hidden',
                    'font-medium whitespace-nowrap',
                    'outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
                    fullWidth && 'w-full',
                    styles,
                    size,
                    buttonColor,
                    textColor,
                    isDisabled ? 'pointer-events-none' : 'cursor-pointer',
                    className
                )}
            >
                <ClickOverlay disabled={isDisabled} />

                {(!!leadingIcon && (loading || iconPosition === 'left')) && (
                    <Icon
                        iconName={leadingIcon}
                        iconColor={iconColor}
                        iconVariant={iconVariant}
                        iconSize={iconSize ?? 20}
                        className={clsx('z-10 relative', loading && 'animate-spin')}
                    />
                )}

                <span className={clsx('z-10 relative', 'text-ellipsis line-clamp-1')}>
                    {label}
                </span>

                {(!loading && !!iconName && iconPosition === 'right') && (
                    <Icon
                        iconName={iconName}
                        iconColor={iconColor}
                        iconVariant={iconVariant}
                        iconSize={iconSize ?? 20}
                        className={clsx('z-10 relative')}
                    />
                )}
            </motion.button>
        </>

    )

}
