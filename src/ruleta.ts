import confetti from 'canvas-confetti'
import type { TipoApuesta } from './domain/apuesta'
import { Apuesta, DOCENA, PLENO } from './domain/apuesta'

export class Ruleta {
  tiposApuesta: TipoApuesta[] = [PLENO, DOCENA]
  apuesta: Apuesta = new Apuesta()

  apostar(): void {
    this.apuesta.apostar()
    if (this.apuesta.resultado?.gano()) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      })
    }
  }
}
