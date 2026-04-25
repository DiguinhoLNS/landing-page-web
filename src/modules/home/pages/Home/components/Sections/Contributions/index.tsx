import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import contributions from '@/modules/home/constants/contributions'
import ContributionCard from './components/Card'

export default function HomeContributions() {

    return(

        <>
            <Section>
                <SectionTitle
                    label='Contribuições'
                    title='Onde meu trabalho pode ser visto'
                />

                <div
                    className={clsx(
                        'grid grid-cols-1 w-full rounded-2xl overflow-hidden',
                        'sm:grid-cols-2',
                        'md:grid-cols-3',
                        'lg:grid-cols-4'
                    )}
                >
                    {contributions.map((item, index) => (
                        <ContributionCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </Section>
        </>

    )

}
