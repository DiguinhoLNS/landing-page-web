/**
 * Projeção de momentum — onde o gesto *ia* parar.
 *
 * Um flick não deve aterrissar no ponto de soltura: deve aterrissar onde a
 * desaceleração levaria. É a mesma função de decaimento exponencial que o
 * scroll usa. A forma de livro-texto (v² / 2a) não é a que a Apple usa.
 *
 * @param initialVelocity velocidade na soltura, em px/s
 * @param decelerationRate 0.998 para sensação de scroll normal, 0.99 para algo mais seco
 * @returns o deslocamento adicional até parar, em px
 */
export function project(initialVelocity: number, decelerationRate = 0.998): number {
    if (decelerationRate <= 0 || decelerationRate >= 1) return 0

    return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate)
}

/**
 * Rubber-band — resistência progressiva além do limite.
 *
 * Uma parada dura lê como "travou". Resistência contínua lê como "responde,
 * mas não há mais nada aqui". Quanto mais longe do limite, menos o elemento
 * acompanha o dedo.
 *
 * @param overshoot quanto passou do limite, em px
 * @param dimension tamanho da superfície no eixo, em px
 * @param constant quanto menor, mais rígido
 */
export function rubberband(overshoot: number, dimension: number, constant = 0.55): number {
    if (dimension <= 0) return 0

    return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot))
}

/**
 * Aplica o limite com rubber-band: dentro dos limites acompanha 1:1,
 * fora deles resiste progressivamente.
 */
export function clampWithRubberband(
    value: number,
    min: number,
    max: number,
    dimension: number,
    constant = 0.55
): number {
    if (value < min) return min + rubberband(value - min, dimension, constant)
    if (value > max) return max + rubberband(value - max, dimension, constant)

    return value
}

/**
 * O ponto de parada mais próximo de um valor — usado sobre o ponto
 * *projetado*, nunca sobre o ponto de soltura.
 */
export function nearestSnapPoint(value: number, points: number[]): number {
    if (points.length === 0) return value

    return points.reduce((closest, point) => (
        Math.abs(point - value) < Math.abs(closest - value) ? point : closest
    ), points[0])
}

interface VelocitySample {
    position: number
    time: number
}

/**
 * Histórico curto de posição para estimar velocidade na soltura.
 *
 * Um único delta entre os dois últimos eventos é ruidoso — principalmente se o
 * dedo pausou antes de soltar. A janela de ~100ms dá uma estimativa estável e
 * ainda reflete a intenção do gesto.
 */
export function createVelocityTracker(windowMs = 100) {
    let samples: VelocitySample[] = []

    return {
        reset(position: number) {
            samples = [{ position, time: performance.now() }]
        },

        add(position: number) {
            const time = performance.now()

            samples.push({ position, time })

            // Mantém só a janela recente, sempre preservando ao menos 2 amostras.
            while (samples.length > 2 && time - samples[0].time > windowMs) {
                samples.shift()
            }
        },

        /** @returns velocidade em px/s */
        velocity(): number {
            if (samples.length < 2) return 0

            const first = samples[0]
            const last = samples[samples.length - 1]
            const elapsed = last.time - first.time

            if (elapsed <= 0) return 0

            return ((last.position - first.position) / elapsed) * 1000
        }
    }
}

export type VelocityTracker = ReturnType<typeof createVelocityTracker>
