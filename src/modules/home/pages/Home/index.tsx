import HomeHero from './components/Sections/Hero'
import HomeJobs from './components/Sections/Jobs'
import HomeSetup from './components/Sections/Setup'
import HomeContact from './components/Sections/Contact'
import HomePersonalProjects from './components/Sections/PersonalProjects'
import HomeBusinessProjects from './components/Sections/BusinessProjects'
import HomeContributions from './components/Sections/Contributions'

export default function Home() {

    return(

        <>
            <HomeHero />

            <HomeJobs />

            <HomeContributions />

            <HomeBusinessProjects />

            <HomePersonalProjects />

            <HomeSetup />

            <HomeContact />
        </>

    )

}
