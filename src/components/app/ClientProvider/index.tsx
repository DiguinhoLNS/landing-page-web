'use client'

import { useTheme } from '@wrksz/themes/client'
import { ProgressProvider } from '@bprogress/next/app'

export default function AppClientProvider({ children }: { children: React.ReactNode }) {

    const { theme } = useTheme()

    return (
        <>
            <ProgressProvider
                height='4px'
                color={theme === 'light' ? '#106d20' : '#82db7e'}
                options={{ showSpinner: false }}
            >
                {children}
            </ProgressProvider>
        </>
    )

}
