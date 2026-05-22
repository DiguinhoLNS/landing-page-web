import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import businessProjects from '@/modules/home/constants/businessProjects'
import BusinessProjectCard from './components/Card'

export default function HomeBusinessProjects() {

    return(

        <>
            <Section id='home-projects-section'>
                <SectionTitle
                    label='Produtos'
                    title='No Que Contribuí'
                />

                <div
                    className={clsx(
                        'grid grid-cols-1 gap-4 w-full',
                        'lg:grid-cols-2'
                    )}
                >
                    {businessProjects.map((item, index) => (
                        <BusinessProjectCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </Section>
        </>

    )

}
