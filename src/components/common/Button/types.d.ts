import { IconProps } from "../Icon/types"

export type TButtonMode = 'default' | 'outlined' | 'contained' | 'contained-tonal'

export type TButtonSize = 'sm' | 'md' | 'lg'

export interface IBaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleRef?: (element: Element | null) => void
    buttonMode?: TButtonMode
    buttonSize?: TButtonSize
    buttonColor?: string
}

export interface ButtonProps extends IBaseButtonProps, Partial<IconProps> {
    href?: string
    label: string
    textColor?: string
    loading?: boolean
    iconPosition?: 'left' | 'right'
    fullWidth?: boolean
}