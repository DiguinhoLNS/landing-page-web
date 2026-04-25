import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import ContantForm from './components/Form'
import ContactInfo from './components/Info'

export default function HomeContact() {

    return(

        <>
            <Section id='home-contact-section'>
                <SectionTitle
                    label='Contato'
                    title='Vamos Conversar'
                />

                <div className={clsx('flex flex-col gap-6 w-full', 'lg:flex-row lg:gap-10')}>
                    <ContactInfo />
                    
                    <ContantForm />
                </div>
            </Section>
        </>

    )

}
