import { IconProps } from "../Icon/types"

export type TButtonMode = 'default' | 'outlined' | 'contained' | 'contained-tonal' | 'glass'

export type TButtonSize = 'sm' | 'md' | 'lg'

type TMotionConflictingHandlers =
    | 'onDrag'
    | 'onDragStart'
    | 'onDragEnd'
    | 'onDragEnter'
    | 'onDragExit'
    | 'onDragLeave'
    | 'onDragOver'
    | 'onDrop'
    | 'onAnimationStart'
    | 'onAnimationEnd'
    | 'onAnimationIteration'

export interface IBaseButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, TMotionConflictingHandlers> {
    handleRef?: (element: Element | null) => void
    buttonMode?: TButtonMode
    buttonSize?: TButtonSize
    buttonColor?: string
}

export interface ButtonProps extends IBaseButtonProps, Partial<IconProps> {
    href?: string
    target?: React.HTMLAttributeAnchorTarget
    label: string
    textColor?: string
    loading?: boolean
    iconPosition?: 'left' | 'right'
    fullWidth?: boolean
}
