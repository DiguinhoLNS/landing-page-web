import type { TProjectStatus } from "./TProjectStatus"

export interface IPersonalProject {
    icon: string
    link?: string
    repository?: string
    title: string
    description: string
    status: TProjectStatus
    tags: string[]
}