import Link from 'next/link'
import clsx from 'clsx'
import BaseButton from './components/BaseButton'
import type { ButtonProps } from './types'

export default function Button({ href, target, ...props }: ButtonProps) {

    if(href) {
        const external = /^https?:\/\//.test(href)
        const resolvedTarget = target ?? (external ? '_blank' : undefined)

        return(
            <Link
                href={href}
                target={resolvedTarget}
                rel={resolvedTarget === '_blank' ? 'noreferrer' : undefined}
                className={clsx('rounded-full', props.fullWidth !== false && 'w-full')}
            >
                <BaseButton {...props} />
            </Link>
        )
    }

    return(
        <BaseButton {...props} />
    )

}
