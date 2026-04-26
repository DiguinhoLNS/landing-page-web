import type { ISetupItem } from '../interfaces/ISetupItem'

const commonItems: ISetupItem[] = [
    {
        icon: 'jamboard_kiosk',
        label: 'Monitor',
        text: 'LG 34" Ultrawide 144hz'
    },
    {
        icon: 'chair_alt',
        label: 'Cadeira',
        text: 'Sensetup Cosy T03'
    },
]

const setup: Record<'game' | 'work', ISetupItem[]> = {
    work: [
        {
            icon: 'laptop_mac',
            label: 'Notebook',
            text: 'MacBook Pro 14" M2 Pro'
        },
        {
            icon: 'mouse',
            label: 'Mouse',
            text: 'Logitech MX Master 3S'
        },
        {
            icon: 'keyboard',
            label: 'Teclado',
            text: 'Logitech MX Mechanical'
        },
        {
            icon: 'earbud_left',
            label: 'Fones',
            text: 'AirPods Pro 2'
        },
        ...commonItems
    ],
    game: [
        {
            icon: 'memory',
            label: 'CPU',
            text: 'Ryzen 7 5700G'
        },
        {
            icon: 'hard_drive_2',
            label: 'Componentes',
            text: 'RTX 2060, 32GB Ram, 2TB SSD'
        },
        {
            icon: 'mouse',
            label: 'Mouse',
            text: 'Logitech G Pro Superlight'
        },
        {
            icon: 'keyboard',
            label: 'Teclado',
            text: 'HyperX Alloy Origins'
        },
        {
            icon: 'headset',
            label: 'Headset',
            text: 'Corsair Virtuoso RGB Wireless SE'
        },
        {
            icon: 'camera_video',
            label: 'webcam',
            text: 'Logitech C920s'
        },
        ...commonItems
    ]
}

export default setup