export interface IContact {
    type: 'email' | 'link'
    label: string
    displayValue: string
    link: string
}