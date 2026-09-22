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

            <HomeJobs />

            <HomeStack />

            <HomeContributions />

            <HomeBusinessProjects />

            <HomePersonalProjects />

            <HomeSetup />

            <HomeContact />
        </>

    )

}
