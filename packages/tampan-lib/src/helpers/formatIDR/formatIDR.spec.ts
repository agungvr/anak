import { formatIDR } from './formatIDR'

describe('formatIDR', () => {
  it('should formats number as IDR currency', () => {
    expect(formatIDR(10000).replace(/\u00a0/g, ' ')).toEqual('Rp 10.000')
    expect(formatIDR(1234567).replace(/\u00a0/g, ' ')).toEqual('Rp 1.234.567')
  })
})
