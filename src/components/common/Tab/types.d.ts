export interface ITab {
    icon?: string
    label: string
    value: string
}

export interface TabProps {
    activeTab: string
    onChange: (tab: string) => void
    tabs: ITab[]
}

export interface TabButtonProps extends Pick<ITab, 'label' | 'icon'> {
    active: boolean
    onClick: () => void
}