import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import projects from '@/modules/home/constants/projects'
import ProjectCard from './components/Card'

export default function HomeProjects() {

    return(

        <>
            <Section>
                <SectionTitle
                    label='Projetos'
                    title='O Que Construí'
                />

                <div className={clsx('flex flex-col gap-4 w-full')}>
                    {projects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </Section>
        </>

    )

}
