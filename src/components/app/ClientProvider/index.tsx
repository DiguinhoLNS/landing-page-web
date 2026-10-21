'use client'

import { ProgressProvider } from '@bprogress/next/app'

export default function AppClientProvider({ children }: { children: React.ReactNode }) {

    return (
        <>
            <ProgressProvider
                height='4px'
                color='var(--color-primary-base)'
                options={{ showSpinner: false }}
            >
                {children}
            </ProgressProvider>
        </>
    )

}
