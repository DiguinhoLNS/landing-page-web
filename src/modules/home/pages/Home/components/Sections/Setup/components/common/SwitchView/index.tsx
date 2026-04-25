'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Tab from '@/components/common/Tab'
import setupSwitchViewTabs from '../../../constants/tabs'
import ViewSetupWork from '../../views/Work'
import ViewSetupGame from '../../views/Game'

export default function SetupSwithView() {

    const [activeTab, setActiveTab] = useState(setupSwitchViewTabs[0].value)

    return(

        <>
            <div className={clsx('flex flex-col items-start gap-8 w-full max-w-100 mx-auto')}>
                <div className={clsx('w-full')}>
                    <Tab
                        tabs={setupSwitchViewTabs}
                        activeTab={activeTab}
                        onChange={setActiveTab}
                    />
                </div>

                <div className={clsx('w-full')}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            className={clsx(
                                'flex flex-col w-full',
                            )}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.15 }}
                        >
                            {activeTab === 'work' && <ViewSetupWork />}
                            {activeTab === 'game' && <ViewSetupGame />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </>

    )

}
