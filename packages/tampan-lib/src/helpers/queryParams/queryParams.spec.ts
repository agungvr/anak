import { queryStringToObj, queryObjToString, getParamsFromUrl, queryParamsURL } from './queryParams'

describe('queryObjToString', () => {
  it('should return an empty string when passed an empty object', () => {
    const emptyObj = {}
    expect(queryObjToString(emptyObj)).toBe('')
  })

  it('should return a query string when passed an object with properties', () => {
    const data = {
      name: 'Agung',
      age: 17,
      isStudent: true,
    }
    const expected = '?name=Agung&age=17&isStudent=true'
    expect(queryObjToString(data)).toBe(expected)
  })

  it('should return properties with ("false" & "0") values', () => {
    const data = {
      name: 'Agung',
      age: 0,
      isStudent: false,
    }
    const expected = '?name=Agung&age=0&isStudent=false'
    expect(queryObjToString(data)).toBe(expected)
  })

  it('should ignore properties with null and undefined values', () => {
    const data = {
      name: 'Agung',
      age: null,
      isStudent: undefined,
    }
    const expected = '?name=Agung'
    expect(queryObjToString(data)).toBe(expected)
  })
})

describe('queryStringToObj', () => {
  it('should correctly parse a query string into an object', () => {
    const queryString = '?name=Agung&age=17&isStudent=true'
    const expectedResult = { name: 'Agung', age: 17, isStudent: true }
    expect(
      queryStringToObj<{ name: string; age: number; isStudent: boolean }>(queryString),
    ).toEqual(expectedResult)
  })

  it('should return an empty object for an empty query string', () => {
    const queryString = ''
    const expectedResult = {}
    expect(queryStringToObj(queryString)).toEqual(expectedResult)
  })

  it('should throw an error if the query string is not valid', () => {
    const queryString = 'name=Agung&age=17&isStudent=true'
    expect(() => queryStringToObj(queryString)).toThrowError('Invalid query string')
  })
})

describe('getParamsFromUrl', () => {
  it('should return an object with the query parameters from the url', () => {
    const url = 'https://www.example.com/path?param1=value1&param2=false'
    const params = getParamsFromUrl(url)
    expect(params).toEqual({ param1: 'value1', param2: false })
  })

  it('should return an empty object if the url has no query parameters', () => {
    const url = 'https://www.example.com/path'
    const params = getParamsFromUrl(url)
    expect(params).toEqual({})
  })

  it('should return an object with the query parameters from the current url', () => {
    const currentUrl = window.location.href
    const params = getParamsFromUrl(currentUrl)
    expect(params).toEqual(expect.objectContaining({}))
  })

  it('should handle url encoded query parameters', () => {
    const url = 'https://www.example.com/path?param1=value1%20with%20spaces&param2=value2'
    const params = getParamsFromUrl(url)
    expect(params).toEqual({ param1: 'value1 with spaces', param2: 'value2' })
  })
})

describe('queryParamsURL', () => {
  beforeEach(() => {
    // set initial query string
    window.history.replaceState({}, '', '?param1=value1&param2=value2')
  })

  describe('get', () => {
    it('should return an object with the current query params', () => {
      const expected = { param1: 'value1', param2: 'value2' }
      expect(queryParamsURL.get()).toEqual(expected)
    })
  })

  describe('set', () => {
    it('should update the query string with the provided object', () => {
      const expected = { param1: 'value1', param2: 'value2', param3: 'value3' }
      queryParamsURL.set({ param3: 'value3' })
      expect(queryParamsURL.get()).toEqual(expected)
    })
  })

  describe('update', () => {
    it('should update the query string with the result of the provided function', () => {
      const expected = { param1: 'newValue' }
      queryParamsURL.update(() => ({ param1: 'newValue' }))
      expect(queryParamsURL.get()).toEqual(expected)
    })
  })

  describe('remove', () => {
    it('should remove the specified query params from the query string', () => {
      const expected = { param2: 'value2' }
      queryParamsURL.remove(['param1'])
      expect(queryParamsURL.get()).toEqual(expected)
    })
  })

  describe('reset', () => {
    beforeEach(() => {
      window.history.replaceState({}, '', 'http://localhost:3000/?foo=bar&hello=world')
    })

    it('should reset the query params', () => {
      queryParamsURL.reset()
      expect(window.location.search).toBe('')
      expect(queryParamsURL.get()).toEqual({})
    })

    it('should reset the query params and update the pathname', () => {
      queryParamsURL.reset()
      expect(window.location.pathname).toBe('/')
    })
  })
})
