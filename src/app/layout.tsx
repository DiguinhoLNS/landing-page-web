import type { Metadata } from 'next'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@wrksz/themes/next'
import { Google_Sans, Roboto } from 'next/font/google'
import AppClarity from '@/components/app/Clarity'
import AppFavicon from '@/components/app/Favicon'
import CookieBanner from '@/components/app/CookieBanner'
import PaletteProvider from '@/components/app/PaletteProvider'
import AppClientProvider from '@/components/app/ClientProvider'
import palettes from '@/constants/palettes'
import { authorName, siteDescription, siteKeywords, siteName, siteTitle, siteUrl } from '@/constants/site'
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

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: `%s — ${siteName}`
    },
    description: siteDescription,
    keywords: siteKeywords,
    applicationName: siteName,
    authors: [{ name: authorName, url: siteUrl }],
    creator: authorName,
    alternates: {
        canonical: '/'
    },
    openGraph: {
        type: 'profile',
        locale: 'pt_BR',
        url: '/',
        siteName,
        title: siteTitle,
        description: siteDescription,
        firstName: 'Rodrigo',
        lastName: 'Santos'
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription
    },
    robots: {
        index: true,
        follow: true
    }
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
                        attribute='data-palette'
                        storageKey='palette'
                        themes={palettes}
                        defaultTheme={palettes[0]}
                        enableSystem={false}
                        enableColorScheme={false}
                        disableTransitionOnChange
                    >
                        <PaletteProvider>
                            <ThemeProvider
                                attribute='data-theme'
                                defaultTheme='system'
                                disableTransitionOnChange
                            >
                                <AppClientProvider>
                                    {children}

                                    <CookieBanner />

                                    <AppFavicon />
                                    <AppClarity />
                                    <Analytics />
                                    <SpeedInsights />
                                </AppClientProvider>
                            </ThemeProvider>
                        </PaletteProvider>
                    </ThemeProvider>
                </body>
            </html> 
        </>
    )
}
