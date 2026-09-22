import Section from '@/components/page/Section'
import SectionTitle from '@/components/common/SectionTitle'
import SetupSwithView from './components/common/SwitchView'

export default function HomeSetup() {

    return(

        <>
            <Section id='home-setup-section'>
                <SectionTitle
                    label='Setup'
                    title='Meu equipamento'
                    description='O que fica na mesa quando é trabalho e quando é jogo.'
                />

                <SetupSwithView />
            </Section>
        </>

    )

}
