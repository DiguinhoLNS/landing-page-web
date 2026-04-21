import Link from 'next/link'
import clsx from 'clsx'
import BaseButton from './components/BaseButton'
import type { ButtonProps } from './types'

export default function Button(props: ButtonProps) {

    if(props.href) {
        return(
            <Link
                href={props.href}
                className={clsx('rounded-full')}
            >
                <BaseButton {...props} />
            </Link>
        )
    }

    return(
        <BaseButton {...props} />
    )

}
