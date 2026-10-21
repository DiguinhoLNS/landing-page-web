import flags from '@/constants/flags'
import HomeHero from './components/Sections/Hero'
import HomeJobs from './components/Sections/Jobs'
import HomeSetup from './components/Sections/Setup'
import HomeContact from './components/Sections/Contact'
import HomePersonalProjects from './components/Sections/PersonalProjects'
import HomeBusinessProjects from './components/Sections/BusinessProjects'
import HomeContributions from './components/Sections/Contributions'
import HomeStack from './components/Sections/Stack'

export default function Home() {

    return(

        <>
            <HomeHero />

            {flags.sections.jobs && <HomeJobs />}

            {flags.sections.stack && <HomeStack />}

            {flags.sections.contributions && <HomeContributions />}

            {flags.sections.products && <HomeBusinessProjects />}

            {flags.sections.projects && <HomePersonalProjects />}

            {flags.sections.setup && <HomeSetup />}

            {flags.sections.contact && <HomeContact />}
        </>

    )

}
