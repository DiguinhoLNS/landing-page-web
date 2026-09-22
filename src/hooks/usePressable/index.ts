'use client'

import { useReducedMotion } from 'framer-motion'
import type { TargetAndTransition, Transition } from 'framer-motion'
import springs, { crossFade } from '@/utils/motion/springs'

interface UsePressableOptions {
    /** Escala no toque. Quanto maior a superfície, menor deve ser o recuo. */
    scale?: number
    /** Sobe levemente no hover — só para superfícies que se comportam como cartão. */
    lift?: boolean
    disabled?: boolean
}

interface PressableProps {
    whileHover?: TargetAndTransition
    whileTap?: TargetAndTransition
    transition: Transition
}

/**
 * Feedback de toque.
 *
 * O destaque acontece no *pointer-down*, não na soltura: esperar o clique
 * completar faz a interface parecer morta. `whileTap` do framer-motion dispara
 * no pointerdown, que é exatamente o momento certo.
 *
 * Com movimento reduzido o feedback não some — vira uma variação de opacidade,
 * que informa o mesmo sem deslocamento vestibular.
 */
export default function usePressable({
    scale = 0.97,
    lift = false,
    disabled = false
}: UsePressableOptions = {}): PressableProps {

    const reducedMotion = useReducedMotion()

    if (disabled) return { transition: springs.press }

    if (reducedMotion) {
        return {
            whileHover: { opacity: 0.86 },
            whileTap: { opacity: 0.7 },
            transition: crossFade
        }
    }

    return {
        whileHover: lift ? { y: -2 } : undefined,
        whileTap: { scale },
        transition: springs.press
    }
}
