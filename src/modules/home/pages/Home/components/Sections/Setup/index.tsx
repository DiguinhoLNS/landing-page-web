import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import SetupSwithView from './components/common/SwitchView'

export default function HomeSetup() {

    return(

        <>
            <Section>
                <SectionTitle
                    label='Setup'
                    title='Meu Equipamento'
                />

                <SetupSwithView />
            </Section>
        </>

    )

}
