import type { TProjectStatus } from "./TProjectStatus"

export interface IProject {
    icon: string
    link?: string;
    repository?: string;
    title: string;
    description: string;
    status: TProjectStatus;
    tags: string[];
}