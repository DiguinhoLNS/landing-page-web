import clsx from 'clsx'

export default function ErrorLayout({ children }: { children?: React.ReactNode }) {

    return(

        <>
            <div className={clsx('flex flex-col flex-1 items-center justify-center gap-20 w-full p-4')}>
                {children}
            </div>
        </>

    )

}
