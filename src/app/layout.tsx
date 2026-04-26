import clsx from 'clsx'
import Clarity from '@microsoft/clarity'
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from '@wrksz/themes/next'
import { Google_Sans, Roboto } from 'next/font/google'
import AppClientProvider from '@/components/app/ClientProvider'
import 'material-symbols'
import './globals.css'

const projectId = process.env.NEXT_PUBLIC_RESEND_PROJECT_ID

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

    Clarity.init(projectId!)

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

                            <Analytics />
                        </AppClientProvider>
                    </ThemeProvider>
                </body>
            </html> 
        </>
    )
}
