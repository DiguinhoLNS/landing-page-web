import type { MotionValue } from 'framer-motion'

export interface ITab {
    icon?: string
    label: string
    value: string
}

export interface TabProps {
    activeTab: string
    onChange: (tab: string) => void
    tabs: ITab[]
    progress?: MotionValue<number>
}

export interface TabButtonProps extends Pick<ITab, 'label' | 'icon'> {
    active: boolean
    standaloneIndicator?: boolean
    onClick: () => void
}
