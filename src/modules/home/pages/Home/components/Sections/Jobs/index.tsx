import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import jobs from '@/modules/home/constants/jobs'
import JobCard from './components/Card'

export default function HomeJobs() {

    return(
    
        <>
            <Section>
                <SectionTitle
                    label='Experiência'
                    title='Onde Trabalhei'
                />

                <div className={clsx('flex flex-col gap-4 w-full', 'md:flex-row')}>
                    {jobs.map((item, index) => (
                        <JobCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </Section>
        </>

    )

}
