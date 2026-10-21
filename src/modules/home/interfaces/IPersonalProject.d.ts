import type { TProjectStatus } from "./TProjectStatus"

export interface IProjectRepository {
    icon?: string
    link: string
    title?: string
}

export interface IPersonalProject {
    icon: string
    link?: string
    repositories?: IProjectRepository[]
    title: string
    description: string
    status: TProjectStatus
    tags: string[]
}