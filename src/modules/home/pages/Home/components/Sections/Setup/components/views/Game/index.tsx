import setup from '@/modules/home/constants/setup'
import SetupList from '../../common/List'

export default function ViewSetupGame() {

    return(

        <>
            <SetupList 
                items={setup.game}
            />
        </>

    )

}
