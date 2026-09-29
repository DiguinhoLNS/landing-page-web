export interface ICookieItem {
    name: string
    provider: string
    storage: 'Cookie' | 'localStorage'
    duration: string
    purpose: string
}

export interface ICookieGroup {
    id: string
    title: string
    description: string
    required: boolean
    items: ICookieItem[]
}
