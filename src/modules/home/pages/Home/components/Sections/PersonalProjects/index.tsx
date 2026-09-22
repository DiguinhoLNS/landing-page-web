import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import Reveal from '@/components/common/Reveal'
import personalProjects from '@/modules/home/constants/personalProjects'
import PersonalProjectCard from './components/Card'

export default function HomePersonalProjects() {

    return(

        <>
            <Section id='home-projects-section'>
                <SectionTitle
                    label='Projetos'
                    title='O que construí'
                    description='Ideias que nasceram ao longo dos anos.'
                />

                <div
                    className={clsx(
                        'grid grid-cols-1 gap-4 w-full',
                        'sm:grid-cols-2',
                        'xl:grid-cols-3'
                    )}
                >
                    {personalProjects.map((item, index) => (
                        <Reveal
                            key={index}
                            delay={Math.min(index, 4) * 0.05}
                            className={clsx('flex')}
                        >
                            <PersonalProjectCard {...item} />
                        </Reveal>
                    ))}
                </div>
            </Section>
        </>

    )

}
