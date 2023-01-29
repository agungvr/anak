import { capitalizeFirstChar } from './formatText'

describe('capitalizeFirstChar', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalizeFirstChar('agung ganteng')).toEqual('Agung ganteng')
  })
  it('should return an empty string if input is empty', () => {
    expect(capitalizeFirstChar('')).toEqual('')
  })
})
