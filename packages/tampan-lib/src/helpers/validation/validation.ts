/* eslint-disable no-new */
export const isPhoneNumber = (phoneNumber: string, pattern = /^(\+62|62|08)(\d{9,12})$/g) =>
  pattern.test(phoneNumber)

export const isEmail = (email: string) => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return pattern.test(email)
}

export const isValidURL = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch (err) {
    return false
  }
}
