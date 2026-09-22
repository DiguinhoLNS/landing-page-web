'use client'

import { useState } from 'react'
import clsx from 'clsx'
import type { MotionValue } from 'framer-motion'
import Tab from '@/components/common/Tab'
import Pager from '@/components/common/Pager'
import setupSwitchViewTabs from '../../../constants/tabs'
import ViewSetupWork from '../../views/Work'
import ViewSetupGame from '../../views/Game'

export default function SetupSwithView() {

    const [activeTab, setActiveTab] = useState(setupSwitchViewTabs[0].value)
    const [progress, setProgress] = useState<MotionValue<number> | undefined>(undefined)

    const index = Math.max(0, setupSwitchViewTabs.findIndex(tab => tab.value === activeTab))

    return(

        <>
            <div className={clsx('flex flex-col items-stretch gap-6 w-full max-w-xl mx-auto')}>
                <Tab
                    tabs={setupSwitchViewTabs}
                    activeTab={activeTab}
                    progress={progress}
                    onChange={setActiveTab}
                />

                <Pager
                    index={index}
                    onProgress={setProgress}
                    onIndexChange={position => setActiveTab(setupSwitchViewTabs[position].value)}
                >
                    <ViewSetupWork />

                    <ViewSetupGame />
                </Pager>

                <p className={clsx('text-caption text-onSurfaceVariant text-center')}>
                    Arraste para trocar
                </p>
            </div>
        </>

    )

}
