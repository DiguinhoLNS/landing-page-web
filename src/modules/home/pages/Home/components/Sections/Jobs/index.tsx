import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import Reveal from '@/components/common/Reveal'
import jobs from '@/modules/home/constants/jobs'
import JobCard from './components/Card'

export default function HomeJobs() {

    return(

        <>
            <Section id='home-jobs-section'>
                <SectionTitle
                    label='Experiência'
                    title='Onde trabalhei'
                    description='Quatro anos entre logística, controle de acesso e educação, sempre perto do produto.'
                />

                <div className={clsx('grid grid-cols-1 gap-4 w-full', 'md:grid-cols-2')}>
                    {jobs.map((item, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.06}
                            className={clsx('flex')}
                        >
                            <JobCard
                                {...item}
                                current={item.period.toLowerCase().includes('presente')}
                            />
                        </Reveal>
                    ))}
                </div>
            </Section>
        </>

    )

}
