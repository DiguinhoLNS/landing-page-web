import React, { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import type { PortalProps } from './types'

const Portal: React.FC <PortalProps> = ({ children, wrapperId = 'portal-wrapper' }) => {

    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

    function createWrapperAndAppendToBody(wrapperId: string){
        const wrapperElement = document.createElement('div')
        wrapperElement.setAttribute("id", wrapperId)
        document.body.appendChild(wrapperElement)

        return wrapperElement
    }

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId)
        let systemCreated = false

        if(!element){
            systemCreated = true
            element = createWrapperAndAppendToBody(wrapperId)
        }
        
        setWrapperElement(element)

        return () => {
            if(systemCreated && element && element.parentNode) element.parentNode.removeChild(element)
        }
    }, [wrapperId])

    if(!wrapperElement) return null
    
    return createPortal(children, wrapperElement!)

}

export default Portal