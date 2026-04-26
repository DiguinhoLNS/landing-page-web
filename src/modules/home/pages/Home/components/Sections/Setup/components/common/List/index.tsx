import clsx from 'clsx'
import Icon from '@/components/common/Icon'
import { ISetupItem } from '@/modules/home/interfaces/ISetupItem'

interface SetupListProps {
    items: ISetupItem[]
}

export default function SetupList({ items }: SetupListProps) {

    return(

        <>
            <div className={clsx('flex flex-col gap-2 w-full')}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={clsx('flex items-center gap-4 w-full p-4 border border-outline rounded-2xl bg-elevation-1')}
                    >
                        <div className={clsx('flex shrink-0 items-center justify-center size-12 rounded-lg bg-primary/10')}>
                            <Icon
                                iconName={item.icon}
                                iconColor={clsx('text-primary')}
                            />
                        </div>

                        <div className={clsx('flex flex-col')}>
                            <h4 className={clsx('font-medium text-onSurfaceVariant text-base', 'md:text-lg')}>
                                {item.text}
                            </h4>

                            <p className={clsx('text-onSurfaceVariant/80 text-sm')}>
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )

}
