
import clsx from 'clsx'
import type { IconProps } from './types'

export default function Icon({
    iconName,
    iconColor,
    iconVariant = 'rounded',
    iconSize = 24
}: IconProps) {

    return(

        <>
            <span
                className={clsx(
                    `material-symbols-${iconVariant}`,
                    iconColor
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
