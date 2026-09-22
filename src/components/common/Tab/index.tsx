'use client'

import clsx from 'clsx'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import TabButton from './components/Button'
import type { TabProps } from './types'

export default function Tab({
    activeTab,
    onChange,
    tabs,
    progress
}: TabProps) {

    const count = Math.max(1, tabs.length)

    const fallback = useMotionValue(0)

    const left = useTransform(
        progress ?? fallback,
        value => `${(Math.max(0, Math.min(count - 1, value)) * 100) / count}%`
    )

    return(

        <>
            <div
                role='tablist'
                className={clsx(
                    'relative',
                    'flex p-1.5 rounded-full',
                    'material-control'
                )}
            >
                {!!progress && (
                    <div aria-hidden className={clsx('absolute inset-1.5 z-0 pointer-events-none')}>
                        <motion.span
                            className={clsx('absolute inset-y-0', 'rounded-full bg-onSurface/10')}
                            style={{ left, width: `${100 / count}%` }}
                        />
                    </div>
                )}

                {tabs.map(tab => (
                    <TabButton
                        key={tab.value}
                        {...tab}
                        active={activeTab === tab.value}
                        standaloneIndicator={!progress}
                        onClick={() => onChange(tab.value)}
                    />
                ))}
            </div>
        </>

    )

}
