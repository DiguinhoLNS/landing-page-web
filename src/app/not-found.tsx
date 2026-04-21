import ErrorNotFound from '@/modules/error/pages/NotFound'

export const metadata = {
    title: 'Página não encontrada',
}

export default function Page() {
    return <ErrorNotFound />
}
