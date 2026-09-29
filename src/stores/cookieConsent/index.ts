import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type TCookieConsentStatus = 'pending' | 'granted' | 'denied'

interface CookieConsentState {
    status: TCookieConsentStatus
    updatedAt: string | null
    grant: () => void
    deny: () => void
    reset: () => void
}

const useCookieConsentStore = create<CookieConsentState>()(
    persist(
        (set) => ({
            status: 'pending',
            updatedAt: null,
            grant: () => set({ status: 'granted', updatedAt: new Date().toISOString() }),
            deny: () => set({ status: 'denied', updatedAt: new Date().toISOString() }),
            reset: () => set({ status: 'pending', updatedAt: null })
        }),
        {
            name: 'cookie-consent',
            version: 1,
            partialize: ({ status, updatedAt }) => ({ status, updatedAt })
        }
    )
)

export default useCookieConsentStore
