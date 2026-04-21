
import clsx from 'clsx'
import Icon from '../Icon'
import type { IBaseButtonProps, TButtonMode, TButtonSize } from '@/components/common/Button/types'
import ClickOverlay from '../ClickOverlay'
import type { IconProps } from '../Icon/types'

interface IconButtonProps extends IBaseButtonProps, IconProps {
    selected?: boolean
}

const variantStyles: Record<string, Record<TButtonMode, string>> = {
    'selected': {
        default: 'text-primary',
        outlined: 'bg-inverseSruface text-inverseOnSurface',
        contained: 'bg-primary text-onPrimary',
        'contained-tonal': 'bg-secondaryContainer text-onSecondaryContainer',
    },
    'noSelected': {
        default: 'text-onSurfaceVariant',
        outlined: 'border border-outline text-onSurfaceVariant',
        contained: 'bg-surfaceVariant text-primary',
        'contained-tonal': 'bg-surfaceVariant text-onSurfaceVariant',
    },
    'disabled': {
        default: 'text-onSurfaceDisabled',
        outlined: 'text-onSurfaceDisabled bg-surfaceDisabled border-surfaceDisabled',
        contained: 'text-onSurfaceDisabled bg-surfaceDisabled',
        'contained-tonal': 'text-onSurfaceDisabled bg-surfaceDisabled',
    }
}

const sizeStyles: Record<TButtonSize, string> = {
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12',
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
    ...props
}: IconButtonProps) {

    const currentVariant = disabled ? 'disabled' : selected ? 'selected' : 'noSelected'

    const styles = variantStyles[currentVariant][buttonMode]
    const size = sizeStyles[buttonSize]

    const buttonStyles = clsx(
        styles,
        size,
    )

    const iconProps = {
        iconName,
        iconColor,
        iconVariant,
        iconSize
    }

    return(

        <>
            <button
                {...props}
                ref={handleRef}
                disabled={disabled}
                className={clsx(
                    'relative',
                    'flex items-center justify-center rounded-full overflow-hidden',
                    buttonStyles,
                    buttonColor,
                    disabled && 'pointer-events-none',
                )}
            >
                <ClickOverlay disabled={disabled} />

                <Icon
                    {...iconProps}
                />
            </button>
        </>

    )

}
