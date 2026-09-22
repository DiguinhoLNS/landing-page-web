import clsx from 'clsx'
import Icon from '@/components/common/Icon'
import { ISetupItem } from '@/modules/home/interfaces/ISetupItem'

interface SetupListProps {
    items: ISetupItem[]
}

export default function SetupList({ items }: SetupListProps) {

    return(

        <>
            <div
                className={clsx(
                    'flex flex-col w-full rounded-[1.25rem] overflow-hidden',
                    'bg-elevation-1 border border-outlineVariant shadow-card'
                )}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={clsx(
                            'flex items-center gap-4 w-full px-4 py-3.5',
                            index > 0 && 'border-t border-outlineVariant'
                        )}
                    >
                        <div className={clsx('flex shrink-0 items-center justify-center size-10 rounded-xl bg-primary/12')}>
                            <Icon
                                iconName={item.icon}
                                iconSize={20}
                                iconColor={clsx('text-primary')}
                            />
                        </div>

                        <div className={clsx('flex flex-col min-w-0')}>
                            <h4 className={clsx('text-body font-medium text-onSurface')}>
                                {item.text}
                            </h4>

                            <p className={clsx('text-caption text-onSurfaceVariant')}>
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )

}
