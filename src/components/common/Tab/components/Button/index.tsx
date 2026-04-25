import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { TabButtonProps } from '../../types'
import Icon from '@/components/common/Icon'

export default function TabButton({ icon, label, active, onClick }: TabButtonProps) {

    return(

        <>
            <button
                className={clsx(
                    'relative',
                    'w-full px-4 py-3 rounded-lg',
                    'transition-all cursor-pointer'
                )}
                onClick={onClick}
            >
                <div
                    className={clsx(
                        'z-10 relative',
                        'flex justify-center items-center gap-2 w-full h-full',
                        'pointer-events-none'
                    )}
                >
                    {!!icon && (
                        <Icon
                            iconName={icon}
                            iconSize={20}
                            iconColor={clsx(active ? 'text-onSurface' : 'text-onSurface/60')}
                        />
                    )}

                    <p
                        className={clsx(
                            'transition-all',
                            'font-medium text-base text-center',
                            active ? 'text-onSurface' : 'text-onSurface/60'
                        )}
                    >
                        {label}
                    </p>
                </div>

                {active && (
                    <motion.div
                        layoutId='active-tab-indicator'
                        className={clsx(
                            'absolute inset-0',
                            'bg-surface rounded-lg transition-colors'
                        )}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                )}
            </button>
        </>

    )

}
