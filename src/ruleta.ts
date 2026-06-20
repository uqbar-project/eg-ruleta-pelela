import confetti from 'canvas-confetti'
import { Apuesta, DOCENA, PLENO } from './apuesta'

export class Ruleta {
  tiposApuesta = [PLENO, DOCENA]
  apuesta = new Apuesta()

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
