type Validable = {
  hasErrors(field: string): boolean
  errorsFrom(field: string): string[]
}

export class Validador {
  element!: Validable
  atributo: string = ''

  get hayError(): boolean {
    return this.element.hasErrors(this.atributo)
  }

  get mensajeError() {
    return this.element.errorsFrom(this.atributo)
  }
}
