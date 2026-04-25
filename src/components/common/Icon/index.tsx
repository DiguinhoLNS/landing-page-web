
import clsx from 'clsx'
import type { IconProps } from './types'

export default function Icon({
    iconName,
    iconColor,
    iconVariant = 'rounded',
    iconSize = 24,
    className
}: IconProps) {

    return(

        <>
            <span
                className={clsx(
                    `material-symbols-${iconVariant}`,
                    'transition-all',
                    iconColor,
                    className
                )}
                style={{
                    fontSize: iconSize
                }}
            >
                {iconName}
            </span>
        </>

    )

}
