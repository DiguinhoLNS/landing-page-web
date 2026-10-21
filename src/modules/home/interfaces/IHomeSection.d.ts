import type { TSectionFlag } from "@/interfaces/IFlags"

export interface IHomeSection {
    id: string
    flag?: TSectionFlag
    label: string
    icon: string
    compact?: boolean
}