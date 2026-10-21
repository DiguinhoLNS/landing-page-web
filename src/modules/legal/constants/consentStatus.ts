import type { TChipVariant } from '@/components/common/Chip/types'
import type { TCookieConsentStatus } from '../interfaces/TCookieConsentStatus'

export const consentStatusLabel: Record<TCookieConsentStatus, string> = {
    pending: 'Sem resposta',
    granted: 'Aceitos',
    denied: 'Recusados'
}

export const consentStatusVariant: Record<TCookieConsentStatus, TChipVariant> = {
    pending: 'default',
    granted: 'success',
    denied: 'error'
}
