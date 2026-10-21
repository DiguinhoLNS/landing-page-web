export type TSectionFlag =
    | 'jobs'
    | 'stack'
    | 'contributions'
    | 'products'
    | 'projects'
    | 'setup'
    | 'contact'

export interface IFlags {
    heroAvailability: boolean
    projectLinks: boolean
    sections: Record<TSectionFlag, boolean>
}