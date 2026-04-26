import clsx from 'clsx'
import TabButton from './components/Button'
import type { TabProps } from './types'

export default function Tab({
    activeTab,
    onChange,
    tabs
}: TabProps) {

    return(

        <>
            <div className={clsx('flex p-2 rounded-2xl bg-elevation-1')}>
                {tabs.map(tab => (
                    <TabButton
                        key={tab.value}
                        {...tab}
                        active={activeTab === tab.value}
                        onClick={() => onChange(tab.value)}
                    />
                ))}
            </div>
        </>

    )

}
