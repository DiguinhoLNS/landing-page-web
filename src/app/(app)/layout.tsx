import clsx from 'clsx'
import Header from '@/components/page/Header'
import Footer from '@/components/page/Footer'

export default function AppLayout({ children }: { children?: React.ReactNode }) {

    return(

        <>
            <div className={clsx('flex flex-col w-full h-svh overflow-x-hidden overflow-y-auto', 'main-scrollbar')}>
                <Header />

                <main className={clsx('flex flex-1 flex-col w-full min-h-[calc(100dvh-56px)]')}>
                    {children}
                </main>

                <Footer />
            </div>
        </>

    )

}
