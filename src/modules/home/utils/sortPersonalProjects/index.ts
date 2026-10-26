import { projectStatusOrder } from '../../constants/projectStatus'
import type { IPersonalProject } from '../../interfaces/IPersonalProject'

export default function sortPersonalProjects(projects: IPersonalProject[]) {
    return [...projects].sort((a, b) => (
        Number(!!b.pinned) - Number(!!a.pinned) ||
        projectStatusOrder[a.status] - projectStatusOrder[b.status] ||
        a.title.localeCompare(b.title, 'pt-BR')
    ))
}
