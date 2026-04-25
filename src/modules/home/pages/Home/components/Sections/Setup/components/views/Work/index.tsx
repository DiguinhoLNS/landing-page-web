import setup from '@/modules/home/constants/setup'
import SetupList from '../../common/List'

export default function ViewSetupWork() {

    return(

        <>
            <SetupList 
                items={setup.work}
            />
        </>

    )

}
