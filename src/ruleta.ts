import { Apuesta, DOCENA, PLENO } from './apuesta'

export class Ruleta {
  tiposApuesta = [PLENO, DOCENA]

  tipoApuestaSeleccionado: string | null = null

  apuesta = new Apuesta()

  get valoresAApostar() {
    const tipoApuestaElegido =
      this.tiposApuesta.find((tipo) => this.tipoApuestaSeleccionado === tipo.descripcion) ?? null
    this.apuesta.tipoApuesta = tipoApuestaElegido
    return tipoApuestaElegido ? tipoApuestaElegido.valoresAApostar : []
  }

  apostar(): void {
    this.apuesta.apostar()
  }

}
