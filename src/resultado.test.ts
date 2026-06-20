import { describe, expect, it } from 'vitest'
import { Resultado } from './resultado'

describe('Resultado', () => {
  it('gano con monto positivo', () => {
    const resultado = new Resultado(7, 350)
    expect(resultado.gano()).toBe(true)
  })

  it('no gano con monto cero', () => {
    const resultado = new Resultado(7, 0)
    expect(resultado.gano()).toBe(false)
  })

  it('valor cuando gana incluye el monto', () => {
    const resultado = new Resultado(7, 350)
    expect(resultado.valor).toContain('Ganaste')
    expect(resultado.valor).toContain('350')
  })

  it('valor cuando pierde incluye el número', () => {
    const resultado = new Resultado(7, 0)
    expect(resultado.valor).toContain('Perdiste')
    expect(resultado.valor).toContain('7')
  })
})
