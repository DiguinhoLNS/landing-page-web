import { isBrowser } from 'framer-motion'
import { useEffect, useState } from 'react'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const useAppBreakpoint = () => {
    const [size, setSize] = useState(0)
    const [breakpoint, setBreakpoint] = useState<Breakpoint>('sm')
    const [breakpoints, setBreakpoints] = useState({
        xl: false,
        lg: false,
        md: false,
        sm: false,
        xs: true
    })

    const getBreakpoint = (width: number): Breakpoint => {
        if (width >= 1280) return 'xl'
        if (width >= 1024) return 'lg'
        if (width >= 768) return 'md'
        if (width >= 640) return 'sm'
        return 'xs'
    }

    const updateBreakpoints = (width: number) => {
        setBreakpoints({
            xl: width >= 1280,
            lg: width >= 1024,
            md: width >= 768,
            sm: width >= 640,
            xs: width > 0
        })
    }

    useEffect(() => {
        if (!isBrowser) return

        const handleResize = () => {
            const width = window.innerWidth

            setSize(width)
            setBreakpoint(getBreakpoint(width))
            updateBreakpoints(width)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return {
        breakpoint,
        size,
        ...breakpoints
    }
}
