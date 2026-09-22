'use client'

import { useCallback, useRef, useState } from 'react'
import type { MotionValue } from 'framer-motion'
import { clampWithRubberband, createVelocityTracker } from '@/utils/motion'

export interface DragBounds {
    min: number
    max: number
}

export interface DragReleaseInfo {
    /** Posição na soltura — o valor que está na tela, não o alvo lógico. */
    position: number
    /** Velocidade na soltura, em px/s. */
    velocity: number
    /** Deslocamento total desde o pointerdown, em px. */
    offset: number
    bounds: DragBounds
}

interface UseDragGestureOptions {
    /** Eixo que este gesto reivindica. */
    axis?: 'x' | 'y'
    /** O valor vivo que o dedo manipula. */
    value: MotionValue<number>
    /** Limites do movimento livre; fora deles entra o rubber-band. */
    getBounds: () => DragBounds
    /** Tamanho da superfície no eixo — calibra a resistência do rubber-band. */
    getDimension: () => number
    /** Movimento mínimo antes de assumir a direção. */
    threshold?: number
    /** Desiste do gesto se o outro eixo dominar (deixa a página rolar). */
    lockAxis?: boolean
    /** Resistência do rubber-band; menor = mais rígido. */
    rubberbandConstant?: number
    enabled?: boolean
    onDragStart?: () => void
    onDragMove?: (position: number) => void
    onRelease?: (info: DragReleaseInfo) => void
    /** Chamado quando o gesto é descartado por pertencer ao outro eixo. */
    onCancel?: () => void
}

/**
 * Arrasto com tracking 1:1.
 *
 * O conteúdo fica colado no dedo e respeita o *offset de onde foi agarrado* —
 * saltar para o centro do elemento quebra a ilusão na hora. Usa Pointer Events
 * com captura, então o tracking continua mesmo quando o ponteiro sai dos
 * limites do elemento.
 *
 * Um pointerdown interrompe qualquer animação em curso e continua a partir do
 * valor que está na tela: é isso que permite agarrar algo em pleno voo e
 * inverter sem esperar a animação terminar.
 *
 * Todas as direções plausíveis são avaliadas no primeiro movimento; quando a
 * intenção fica clara, as perdedoras são canceladas com confiança.
 */
export default function useDragGesture({
    axis = 'x',
    value,
    getBounds,
    getDimension,
    threshold = 10,
    lockAxis = true,
    rubberbandConstant = 0.55,
    enabled = true,
    onDragStart,
    onDragMove,
    onRelease,
    onCancel
}: UseDragGestureOptions) {

    const [isDragging, setIsDragging] = useState(false)

    const tracker = useRef(createVelocityTracker())
    const pointerId = useRef<number | null>(null)
    const target = useRef<HTMLElement | null>(null)

    const startPoint = useRef({ x: 0, y: 0 })
    const startValue = useRef(0)
    const committed = useRef(false)
    const abandoned = useRef(false)
    const thresholdOffset = useRef(0)
    const lastPosition = useRef(0)

    const finish = useCallback(() => {
        const element = target.current

        if (!!element && pointerId.current !== null && element.hasPointerCapture(pointerId.current)) {
            element.releasePointerCapture(pointerId.current)
        }

        pointerId.current = null
        target.current = null
        committed.current = false
        abandoned.current = false
        thresholdOffset.current = 0

        setIsDragging(false)
        document.body.classList.remove('dragging')
    }, [])

    const onPointerDown = useCallback((event: React.PointerEvent<HTMLElement>) => {
        if (!enabled || pointerId.current !== null) return

        if (event.pointerType === 'mouse' && event.button !== 0) return

        const element = event.currentTarget

        value.stop()

        pointerId.current = event.pointerId
        target.current = element
        startPoint.current = { x: event.clientX, y: event.clientY }
        startValue.current = value.get()
        lastPosition.current = value.get()
        committed.current = false
        abandoned.current = false
        thresholdOffset.current = 0

        tracker.current.reset(value.get())
    }, [enabled, value])

    const onPointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
        if (pointerId.current !== event.pointerId || abandoned.current) return

        const deltaX = event.clientX - startPoint.current.x
        const deltaY = event.clientY - startPoint.current.y
        const primary = axis === 'x' ? deltaX : deltaY
        const secondary = axis === 'x' ? deltaY : deltaX

        if (!committed.current) {
            if (Math.abs(primary) < threshold && Math.abs(secondary) < threshold) return

            if (lockAxis && Math.abs(secondary) > Math.abs(primary)) {
                abandoned.current = true
                onCancel?.()
                finish()
                return
            }

            committed.current = true
            thresholdOffset.current = Math.sign(primary) * threshold

            const element = target.current

            if (!!element) element.setPointerCapture(event.pointerId)

            setIsDragging(true)
            document.body.classList.add('dragging')
            onDragStart?.()
        }

        const bounds = getBounds()
        const raw = startValue.current + primary - thresholdOffset.current
        const next = clampWithRubberband(raw, bounds.min, bounds.max, getDimension(), rubberbandConstant)

        lastPosition.current = next
        tracker.current.add(next)
        value.set(next)
        onDragMove?.(next)
    }, [
        axis,
        threshold,
        lockAxis,
        getBounds,
        getDimension,
        rubberbandConstant,
        value,
        onDragStart,
        onDragMove,
        onCancel,
        finish
    ])

    const onPointerUp = useCallback((event: React.PointerEvent<HTMLElement>) => {
        if (pointerId.current !== event.pointerId) return

        const wasCommitted = committed.current

        if (wasCommitted) {
            onRelease?.({
                position: lastPosition.current,
                velocity: tracker.current.velocity(),
                offset: lastPosition.current - startValue.current,
                bounds: getBounds()
            })
        }

        finish()
    }, [getBounds, onRelease, finish])

    return {
        isDragging,
        handlers: {
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel: onPointerUp
        }
    }
}
