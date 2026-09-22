import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import Reveal from '@/components/common/Reveal'
import businessProjects from '@/modules/home/constants/businessProjects'
import BusinessProjectCard from './components/Card'

export default function HomeBusinessProjects() {

    return(

        <>
            <Section id='home-products-section'>
                <SectionTitle
                    label='Produtos'
                    title='No que contribuí'
                    description='Produtos em produção que ajudei a arquitetar e construir.'
                />

                <div className={clsx('grid grid-cols-1 gap-4 w-full', 'lg:grid-cols-2')}>
                    {businessProjects.map((item, index) => (
                        <Reveal
                            key={index}
                            delay={Math.min(index, 3) * 0.06}
                            className={clsx('flex')}
                        >
                            <BusinessProjectCard {...item} />
                        </Reveal>
                    ))}
                </div>
            </Section>
        </>

    )

}
