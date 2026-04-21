import { useEffect } from 'react'

export default function useOutsideClick(
    ref: React.RefObject<HTMLElement | null>,
    callback: (open: boolean) => void,
    excludeIds: string[] = []
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!!ref && !!ref.current && !ref.current.contains(event.target as Node)) {
                const target = event.target as HTMLElement
                const isExcluded = excludeIds.some(
                    (id) => target.id === id || target.closest(`#${id}`)
                )

                if (!isExcluded) callback(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, excludeIds, callback])
}
