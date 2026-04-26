"use client"

import { useId } from 'react'
import clsx from 'clsx'

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
    label: string
    supportingText?: string
    errorText?: string
    error?: boolean
    containerClassName?: string
}

export default function TextArea({
    id,
    label,
    supportingText,
    errorText,
    error = false,
    disabled = false,
    rows = 5,
    className,
    containerClassName,
    ...props
}: TextAreaProps) {

    const generatedId = useId()

    const textareaId = id ?? generatedId
    const hasError = error || !!errorText
    const shouldShowErrorState = hasError && !disabled
    const helperMessage = hasError ? errorText : supportingText

    return(

        <>
            <div className={clsx('flex flex-col gap-1 w-full', containerClassName)}>
                <label
                    htmlFor={textareaId}
                    className={clsx('relative block')}
                >
                    <textarea
                        {...props}
                        id={textareaId}
                        rows={rows}
                        disabled={disabled}
                        aria-invalid={hasError}
                        placeholder=' '
                        className={clsx(
                            'peer',
                            'w-full min-h-32 px-4 pt-6 pb-4 rounded border bg-transparent outline-none transition-colors resize-y',
                            'text-base leading-6',
                            'text-onSurface placeholder:text-transparent',
                            shouldShowErrorState ? 'border-error focus:border-error focus:border-2' : 'border-outline focus:border-primary focus:border-2',
                            'disabled:cursor-not-allowed disabled:border-surfaceDisabled disabled:bg-surfaceDisabled/20 disabled:text-onSurfaceDisabled disabled:resize-none',
                            className,
                        )}
                    />

                    <span
                        className={clsx(
                            'absolute left-3 top-0 -translate-y-1/2',
                            'px-1 bg-surface pointer-events-none transition-all',
                            'text-xs',
                            shouldShowErrorState ? 'text-error peer-focus:text-error' : 'text-onSurfaceVariant peer-focus:text-primary',
                            'peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base',
                            'peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs',
                            'peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-xs',
                            'peer-disabled:text-onSurfaceDisabled',
                        )}
                    >
                        {label}
                    </span>
                </label>

                {!!helperMessage && (
                    <p
                        className={clsx(
                            'px-4 text-xs leading-4',
                            disabled ? 'text-onSurfaceDisabled' : hasError ? 'text-error' : 'text-onSurfaceVariant'
                        )}
                    >
                        {helperMessage}
                    </p>
                )}
            </div>
        </>

    )

}
