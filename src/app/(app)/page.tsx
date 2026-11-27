import JsonLd from '@/components/app/JsonLd'
import Home from '@/modules/home/pages/Home'
import personSchema from '@/modules/home/constants/personSchema'

export default function Page() {

    return(

        <>
            <JsonLd data={personSchema} />

            <Home />
        </>

    )

}
