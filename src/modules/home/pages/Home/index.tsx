import HomeHero from './components/Sections/Hero'
import HomeJobs from './components/Sections/Jobs'
import HomeSetup from './components/Sections/Setup'
import HomeContact from './components/Sections/Contact'
import HomeProjects from './components/Sections/Projects'
import HomeContributions from './components/Sections/Contributions'

export default function Home() {

    return(

        <>
            <HomeHero />

            <HomeJobs />

            <HomeContributions />

            <HomeProjects />

            <HomeSetup />

            <HomeContact />
        </>

    )

}
