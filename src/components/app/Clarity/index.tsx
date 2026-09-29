'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'
import useCookieConsentStore from '@/stores/cookieConsent'

const projectId = process.env.NEXT_PUBLIC_CLARITY_ID

export default function AppClarity() {

    const status = useCookieConsentStore(state => state.status)

    useEffect(() => {
        if (!projectId) return

        Clarity.init(projectId)
    }, [])

    useEffect(() => {
        if (!projectId || status === 'pending') return

        const storage = status === 'granted' ? 'granted' : 'denied'

        Clarity.consentV2({
            ad_Storage: 'denied',
            analytics_Storage: storage
        })
    }, [status])

    return null

}
