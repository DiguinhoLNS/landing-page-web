import type { Transition } from 'framer-motion'

/**
 * Molas descritas como a Apple descreve: damping ratio + response.
 *
 * - `damping` controla o overshoot. 1.0 é criticamente amortecido (assenta
 *   sem quicar). Abaixo de 1.0 ultrapassa e oscila — quanto menor, mais quica.
 * - `response` é quão rápido o valor alcança o alvo, em segundos. Não é
 *   "duração": uma mola não tem duração fixa, o tempo de assentamento emerge
 *   dos parâmetros.
 *
 * No framer-motion o par equivalente é `bounce` + `visualDuration`:
 * `visualDuration` é o tempo até o valor *parecer* ter chegado ao alvo, que é
 * exatamente o que `response` significa.
 */
export function appleSpring(damping: number, response: number): Transition {
    return {
        type: 'spring',
        bounce: Math.min(1, Math.max(0, 1 - damping)),
        visualDuration: response
    }
}

/**
 * Presets. O padrão é criticamente amortecido: overshoot numa superfície que
 * só apareceu soa errado. O quique fica reservado para quando o próprio gesto
 * trouxe momentum — um flick, um arremesso, a soltura de um arrasto.
 */
const springs = {
    /** UI geral: aparecer, trocar, revelar. Sem overshoot. */
    ui: appleSpring(1.0, 0.35),

    /** Reação a toque — precisa ser curta o bastante para parecer instantânea. */
    press: appleSpring(1.0, 0.18),

    /** Mudança de posição (o preset de "mover" da Apple). */
    move: appleSpring(1.0, 0.4),

    /** Rotação — a Apple usa um pouco de quique aqui. */
    rotation: appleSpring(0.8, 0.4),

    /** Gaveta / sheet. */
    sheet: appleSpring(0.8, 0.3),

    /** Pós-gesto: o dedo trouxe momentum, então um quique leve é físico. */
    momentum: appleSpring(0.8, 0.35),

    /** Volta elástica ao limite depois de um rubber-band. */
    rubberband: appleSpring(1.0, 0.3)
} satisfies Record<string, Transition>

/**
 * Handoff de velocidade: a animação continua na velocidade exata em que o dedo
 * soltou, para não existir emenda visível entre arrastar e animar.
 * O framer-motion recebe px/s absolutos.
 */
export function withVelocity(transition: Transition, velocity: number): Transition {
    return {
        ...transition,
        velocity
    }
}

/**
 * Equivalente de movimento reduzido: um cross-fade curto, sem deslocamento.
 */
export const crossFade: Transition = {
    type: 'tween',
    duration: 0.2,
    ease: 'easeOut'
}

export default springs
