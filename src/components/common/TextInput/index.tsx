"use client"

import { useId, useState } from 'react'
import clsx from 'clsx'
import Icon from '../Icon'

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label: string
    supportingText?: string
    errorText?: string
    error?: boolean
    containerClassName?: string
}

export default function TextInput({
    id,
    type = 'text',
    label,
    supportingText,
    errorText,
    error = false,
    disabled = false,
    className,
    containerClassName,
    ...props
}: TextInputProps) {

    const generatedId = useId()

    const [showPassword, setShowPassword] = useState(false)

    const inputId = id ?? generatedId
    const isPasswordInput = type === 'password'
    const hasError = error || !!errorText
    const shouldShowErrorState = hasError && !disabled
    const inputType = isPasswordInput ? showPassword ? 'text' : 'password' : type
    const helperMessage = hasError ? errorText : supportingText

    return(

        <>
            <div className={clsx('flex flex-col gap-1 w-full', containerClassName)}>
                <label
                    htmlFor={inputId}
                    className={clsx('relative block')}
                >
                    <input
                        {...props}
                        id={inputId}
                        type={inputType}
                        disabled={disabled}
                        aria-invalid={hasError}
                        placeholder=' '
                        className={clsx(
                            'peer',
                            'w-full h-14 px-4 py-2 rounded border bg-transparent outline-none transition-colors',
                            'text-base leading-6',
                            'text-onSurface placeholder:text-transparent',
                            shouldShowErrorState ? 'border-error focus:border-error focus:border-2' : 'border-outline focus:border-primary focus:border-2',
                            'disabled:cursor-not-allowed disabled:border-surfaceDisabled disabled:bg-surfaceDisabled/20 disabled:text-onSurfaceDisabled',
                            isPasswordInput && 'pr-14',
                            className,
                        )}
                    />

                    {isPasswordInput && (
                        <button
                            type='button'
                            tabIndex={-1}
                            disabled={disabled}
                            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                            className={clsx(
                                'absolute top-1/2 right-1 -translate-y-1/2',
                                'flex items-center justify-center size-10 rounded-full transition-colors',
                                'text-onSurfaceVariant hover:bg-current/8 active:bg-current/10',
                                'disabled:text-onSurfaceDisabled disabled:hover:bg-transparent'
                            )}
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            <Icon
                                iconName={showPassword ? 'visibility_off' : 'visibility'}
                                iconColor={disabled ? 'text-onSurfaceDisabled' : 'text-onSurfaceVariant'}
                                iconSize={20}
                            />
                        </button>
                    )}

                    <span
                        className={clsx(
                            'absolute left-3 top-0 -translate-y-1/2',
                            'px-1 bg-surface pointer-events-none transition-all',
                            'text-xs',
                            shouldShowErrorState ? 'text-error peer-focus:text-error' : 'text-onSurfaceVariant peer-focus:text-primary',
                            'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base',
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