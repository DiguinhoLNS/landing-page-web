import type { TChipVariant } from '@/components/common/Chip/types'
import type { TProjectStatus } from '../interfaces/TProjectStatus'

export const projectStatusLabel: Record<TProjectStatus, string> = {
    planned: 'Planejado',
    development: 'Em desenvolvimento',
    concluded: 'Finalizado',
    private: 'Privado',
    archived: 'Arquivado'
}

export const projectStatusVariant: Record<TProjectStatus, TChipVariant> = {
    planned: 'default',
    development: 'warning',
    concluded: 'success',
    private: 'default',
    archived: 'default'
}
