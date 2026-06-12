import type { ValidationMessage } from './validation-message'

export class Validador {
  errors: ValidationMessage[] = []
  atributo: string = ''

  get hayError(): boolean {
    return this.errors.some((_) => _.field === this.atributo)
  }

  get mensajeError() {
    return this.errors
      .filter((_) => _.field === this.atributo)
      .map((_) => _.message)
      .join('. ')
  }
}
