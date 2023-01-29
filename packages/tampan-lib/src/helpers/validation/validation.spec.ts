import { isPhoneNumber, isEmail, isValidURL } from './validation'

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
