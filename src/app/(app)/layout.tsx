import clsx from 'clsx'
import Header from '@/components/page/Header'
import Footer from '@/components/page/Footer'
import BottomNav from '@/components/page/BottomNav'

export default function AppLayout({ children }: { children?: React.ReactNode }) {

    return(

        <>
            <div
                id='app-scroll'
                className={clsx('flex flex-col w-full h-svh overflow-x-hidden overflow-y-auto', 'main-scrollbar')}
            >
                <Header />

                <main className={clsx('flex flex-1 flex-col')}>
                    {children}
                </main>

                <Footer />

                <div aria-hidden className={clsx('shrink-0 h-24', 'md:hidden')} />
            </div>

            <BottomNav />
        </>

    )

}
