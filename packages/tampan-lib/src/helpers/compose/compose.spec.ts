import { compose } from './compose'

describe('compose function', () => {
  it('should return the passed function when passed one argument', () => {
    const square = (x: number) => x * x
    expect(compose(square)(3)).toEqual(9)
  })

  it('should compose multiple functions correctly', () => {
    const double = (x: number) => x * 2
    const square = (x: number) => x * x
    const doubleThenSquare = compose(double, square)
    expect(doubleThenSquare(3)).toEqual(18)
  })

  it('should handle different input types', () => {
    const toUpperCase = (x: string) => x.toUpperCase()
    const reverseString = (x: string) => x.split('').reverse().join('')
    const upperCaseThenReverse = compose(toUpperCase, reverseString)
    expect(upperCaseThenReverse('Hello')).toEqual('OLLEH')
  })
})
