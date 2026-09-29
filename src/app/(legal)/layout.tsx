import clsx from 'clsx'
import Header from '@/components/page/Header'
import Footer from '@/components/page/Footer'

export default function LegalLayout({ children }: { children?: React.ReactNode }) {

    return(

        <>
            <div
                id='app-scroll'
                className={clsx('flex flex-col w-full h-svh overflow-x-hidden overflow-y-auto', 'main-scrollbar')}
            >
                <Header showNav={false} />

                <main className={clsx('flex flex-1 flex-col')}>
                    {children}
                </main>

                <Footer />
            </div>
        </>

    )

}
