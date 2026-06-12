import { Apuesta, DOCENA, PLENO } from "./apuesta"

export class Ruleta {
  tiposApuesta = [PLENO, DOCENA]

  // Innecesario: resolver https://github.com/uqbar-project/pelelajs/issues/113
  tipoApuesta: string | null = null

  apuesta = new Apuesta()

  // Innecesario: agregar un ticket para poder pasar parámetros constantes
  validadorFecha = 'fecha'

  get valoresAApostar() {
    const tipoApuestaElegido = [PLENO, DOCENA].find((tipo) => this.tipoApuesta === tipo.descripcion)!
    this.apuesta.tipoApuesta = tipoApuestaElegido
    return tipoApuestaElegido ? tipoApuestaElegido.valoresAApostar : []
  }

  apostar(): void {
    console.info('Apostando', this.apuesta)
    this.apuesta.apostar()
  }

}
