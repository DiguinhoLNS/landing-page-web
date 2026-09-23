import clsx from 'clsx'
import Reveal from '@/components/common/Reveal'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import stack from '@/modules/home/constants/stack'
import StackBadge from './components/Badge'

export default function HomeStack() {

    return(

        <>
            <Section id='home-stack-section'>
                <SectionTitle
                    label='Stack'
                    title='Com o que eu construo'
                    description='As tecnologias que uso no dia a dia para desenvolver produtos escaláveis.'
                />

                <div className={clsx('flex flex-col w-full')}>
                    {stack.map((group, index) => (
                        <Reveal
                            key={group.title}
                            delay={Math.min(index, 3) * 0.04}
                            className={clsx(
                                'grid grid-cols-1 gap-4 py-6',
                                'md:grid-cols-[12rem_1fr] md:gap-8',
                                index > 0 && 'border-t border-outlineVariant'
                            )}
                        >
                            <h3 className={clsx('text-headline text-onSurface', 'md:pt-2')}>
                                {group.title}
                            </h3>

                            <ul className={clsx('flex flex-wrap gap-2')}>
                                {group.items.map(item => (
                                    <li key={item.name}>
                                        <StackBadge {...item} />
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </Section>
        </>

    )

}
