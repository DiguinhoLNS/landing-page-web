import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@wrksz/themes/next'
import { Google_Sans, Roboto } from 'next/font/google'
import AppClientProvider from '@/components/app/ClientProvider'
import AppClarity from '@/components/app/Clarity'
import CookieBanner from '@/components/app/CookieBanner'
import 'material-symbols'
import './globals.css'

const roboto = Roboto({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap'
})

const googleSans = Google_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-google-sans',
    display: 'swap',
    adjustFontFallback: false,
    fallback: ['system-ui', 'sans-serif']
})

export const metadata = {
    title: 'rodrigo.dev',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            <html
                lang='pt-br'
                className={clsx('h-svh bg-surface antialiased', 'font-google-sans', googleSans.variable, roboto.variable)}
                suppressHydrationWarning
            >
                <body className={clsx('flex flex-1 flex-col w-full h-full')}>
                    <ThemeProvider
                        attribute='data-theme'
                        defaultTheme='dark'
                        disableTransitionOnChange
                    >
                        <AppClientProvider>
                            {children}

                            <CookieBanner />

                            <AppClarity />
                            <Analytics />
                            <SpeedInsights />
                        </AppClientProvider>
                    </ThemeProvider>
                </body>
            </html> 
        </>
    )
}
