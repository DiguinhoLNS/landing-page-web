
import clsx from 'clsx'
import Icon from '../../../Icon'
import ClickOverlay from '../../../ClickOverlay'
import type { ButtonProps, TButtonMode, TButtonSize } from '../../types'

const variantStyles: Record<string, Record<TButtonMode, string>> = {
    active: {
        default: 'text-primary',
        outlined: 'text-primary border border-outline',
        contained: 'bg-primary text-onPrimary',
        'contained-tonal': 'bg-secondaryContainer text-onSecondaryContainer',
    },
    disabled: {
        default: 'text-onSurfaceDisabled',
        outlined: 'text-onSurfaceDisabled border border-surfaceDisabled',
        contained: 'bg-surfaceDisabled text-onSurfaceDisabled',
        'contained-tonal': 'bg-surfaceDisabled text-onSurfaceDisabled',
    }
}

const sizeStyles: Record<TButtonSize, string> = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
}

export default function Button({
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
    disabled = false,
    fullWidth = true,
    ...props
}: ButtonProps) {

    const currentVariant = disabled ? 'disabled' : 'active'

    const styles = variantStyles[currentVariant][buttonMode]
    const size = sizeStyles[buttonSize]

    const buttonStyles = clsx(
        styles,
        size
    )

    return(

        <>
            <button
                {...props}
                type={type}
                disabled={disabled}
                className={clsx(
                    'relative',
                    'flex items-center justify-center gap-2 px-4 py-2 rounded-full overflow-hidden',
                    fullWidth && 'w-full',
                    buttonStyles,
                    buttonColor,
                    disabled && 'pointer-events-none',
                )}
            >
                <ClickOverlay disabled={disabled} />

                {(!!iconName && iconPosition === 'left') && (
                    <Icon
                        {...{
                            iconName,
                            iconColor,
                            iconVariant,
                            iconSize
                        }}
                    />
                )}

                <p
                    className={clsx('text-ellipsis line-clamp-1')}
                >
                    {label}
                </p>
                
                {(!!iconName && iconPosition === 'right') && (
                    <Icon
                        {...{
                            iconName,
                            iconColor,
                            iconVariant,
                            iconSize
                        }}
                    />
                )}
            </button>
        </>

    )

}
