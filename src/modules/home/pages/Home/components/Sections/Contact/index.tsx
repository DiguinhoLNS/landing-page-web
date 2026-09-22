import clsx from 'clsx'
import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import Reveal from '@/components/common/Reveal'
import ContantForm from './components/Form'
import ContactInfo from './components/Info'

export default function HomeContact() {

    return(

        <>
            <Section id='home-contact-section'>
                <SectionTitle
                    label='Contato'
                    title='Vamos conversar'
                />

                <div
                    className={clsx(
                        'grid grid-cols-1 gap-8 w-full',
                        'lg:grid-cols-[0.85fr_1.15fr] lg:gap-12'
                    )}
                >
                    <Reveal from='left'>
                        <ContactInfo />
                    </Reveal>

                    <Reveal from='right' delay={0.06}>
                        <div
                            className={clsx(
                                'p-5 rounded-[1.25rem]',
                                'bg-elevation-1 border border-outlineVariant shadow-card',
                                'md:p-7'
                            )}
                        >
                            <ContantForm />
                        </div>
                    </Reveal>
                </div>
            </Section>
        </>

    )

}
