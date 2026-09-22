'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Icon from '@/components/common/Icon'
import useSectionNav from '@/hooks/useSectionNav'
import { compactHomeSections } from '@/modules/home/constants/sections'
import springs from '@/utils/motion/springs'

const compactNavIds = compactHomeSections.map(section => section.id)

export default function BottomNav() {

    const { activeId, goTo } = useSectionNav(compactNavIds)

    return(

        <>
            <div
                className={clsx(
                    'z-100 fixed inset-x-0 bottom-0',
                    'flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none',
                    'md:hidden'
                )}
            >
                <nav
                    aria-label='Navegação da página'
                    className={clsx(
                        'flex items-center gap-1 p-1.5 rounded-full pointer-events-auto',
                        'material-chrome'
                    )}
                >
                    {compactHomeSections.map(section => {
                        const active = activeId === section.id

                        return(
                            <button
                                key={section.id}
                                type='button'
                                aria-label={section.label}
                                aria-current={active ? 'true' : undefined}
                                className={clsx(
                                    'group relative',
                                    'flex items-center justify-center size-11 rounded-full cursor-pointer',
                                    'outline-none focus-visible:ring-2 focus-visible:ring-primary'
                                )}
                                onClick={() => goTo(section.id)}
                            >
                                {active && (
                                    <motion.span
                                        layoutId='bottom-nav-indicator'
                                        className={clsx('absolute inset-0', 'rounded-full bg-onSurface/10')}
                                        transition={springs.move}
                                    />
                                )}

                                <Icon
                                    iconName={section.icon}
                                    iconSize={22}
                                    iconColor={clsx(
                                        'z-10 relative',
                                        active ? 'text-onSurface' : 'text-onSurfaceVariant'
                                    )}
                                    className={clsx(
                                        'duration-100 ease-out',
                                        'group-active:scale-90'
                                    )}
                                />
                            </button>
                        )
                    })}
                </nav>
            </div>
        </>

    )

}
