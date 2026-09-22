import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import Reveal from '@/components/common/Reveal'
import contributions from '@/modules/home/constants/contributions'
import ContributionCard from './components/Card'

export default function HomeContributions() {

    return(

        <>
            <Section id='home-contributions-section'>
                <SectionTitle
                    label='Contribuições'
                    title='Onde meu trabalho pode ser visto'
                />

                <div
                    className={clsx(
                        'grid grid-cols-1 gap-3 w-full',
                        'sm:grid-cols-2',
                        'lg:grid-cols-4'
                    )}
                >
                    {contributions.map((item, index) => (
                        <Reveal
                            key={index}
                            delay={Math.min(index, 5) * 0.04}
                            className={clsx('flex')}
                        >
                            <ContributionCard {...item} />
                        </Reveal>
                    ))}
                </div>
            </Section>
        </>

    )

}
