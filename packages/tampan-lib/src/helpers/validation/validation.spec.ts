import { isPhoneNumber, isEmail, isValidURL, isEqual } from './validation'

describe('isPhoneNumber', () => {
  it('should return true for valid phone numbers', () => {
    expect(isPhoneNumber('+6281234567890')).toBe(true)
    expect(isPhoneNumber('6281234567890')).toBe(true)
    expect(isPhoneNumber('081234567890')).toBe(true)
    expect(isPhoneNumber('+62812345678901')).toBe(true)
    expect(isPhoneNumber('+62812345678')).toBe(true)
  })

  it('should return false for invalid phone numbers', () => {
    expect(isPhoneNumber('0812345678')).toBe(false)
    expect(isPhoneNumber('+628123456789a')).toBe(false)
    expect(isPhoneNumber('08123456789a')).toBe(false)
    expect(isPhoneNumber('')).toBe(false)
  })
})

describe('isEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isEmail('email@example.com')).toBe(true)
    expect(isEmail('email.example@gmail.com')).toBe(true)
    expect(isEmail('email_example@yahoo.co.id')).toBe(true)
  })

  it('should return false for invalid email addresses', () => {
    expect(isEmail('email@')).toBe(false)
    expect(isEmail('@example.com')).toBe(false)
    expect(isEmail('email.example@')).toBe(false)
    expect(isEmail('email_example@yahoo.')).toBe(false)
    expect(isEmail('email@example.')).toBe(false)
    expect(isEmail('')).toBe(false)
  })
})

describe('isValidURL', () => {
  it('should return true for a valid URL', () => {
    expect(isValidURL('https://www.example.com')).toBe(true)
  })

  it('should return false for an invalid URL', () => {
    expect(isValidURL('www.example.com')).toBe(false)
  })

  it('should return true for a valid URL with ftp protocol', () => {
    expect(isValidURL('ftp://ftp.example.com')).toBe(true)
  })
})

describe('isEqual', () => {
  it('should return true for equal primitive values', () => {
    expect(isEqual(1, 1)).toBe(true)
    expect(isEqual('hello', 'hello')).toBe(true)
    expect(isEqual(true, true)).toBe(true)
  })

  it('should return false for unequal primitive values', () => {
    expect(isEqual(1, 2)).toBe(false)
    expect(isEqual('hello', 'Hello')).toBe(false)
    expect(isEqual(true, false)).toBe(false)
  })

  it('should return true for equal objects', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
  })

  it('should return false for unequal objects', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false)
    expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false)
  })

  it('should return true for equal arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(isEqual([{ a: 1 }], [{ a: 1 }])).toBe(true)
  })

  it('should return false for unequal arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false)
    expect(isEqual([{ a: 1 }], [{ a: 2 }])).toBe(false)
  })
})
