/* eslint-disable @typescript-eslint/no-explicit-any */
interface QueryObjectType {
  [key: string]: string | number | boolean | null | undefined
}

interface QueryParamsType {
  [key: string]: any
}

// ==== Query heplers
const isUsableValue = <T>(value: T): value is Exclude<T, undefined | null | ''> =>
  value !== undefined && value !== null && value !== ''

const getCleanQueryObj = (data: QueryObjectType): QueryObjectType =>
  Object.fromEntries(Object.entries(data).filter(([, value]) => isUsableValue(value)))

const isValidQueryParams = (query: string): boolean => {
  if (query.charAt(0) !== '?') {
    throw new Error('Invalid query string: must begin with "?"')
  }
  return true
}

const removeQueryParamsFromObject = <T extends { [key: string]: unknown }, K extends keyof T>(
  obj: T,
  keysToRemove: K[],
): Omit<T, K> => {
  const newObj = { ...obj }
  keysToRemove.forEach((key) => {
    delete newObj[key]
  })
  return newObj as Omit<T, K>
}

const parseBooleanAndNumber = (value: any) => {
  if (!Number.isNaN(+value)) {
    return +value
  }
  if (value === 'true') {
    return true
  }
  if (value === 'false') {
    return false
  }
  return value
}

// ==== Convert query object to string
export const queryObjToString = (data: QueryObjectType): string => {
  const cleanObj = getCleanQueryObj(data)
  const searchParams = new URLSearchParams()

  Object.entries(cleanObj).forEach(([key, value]) => {
    if (value != null) {
      searchParams.append(key, value.toString())
    }
  })

  const queryString = searchParams.toString()
  return queryString ? `?${queryString}` : ''
}

// ==== Convert query string to object
export const queryStringToObj = <T>(url: string): T => {
  if (url) {
    isValidQueryParams(url)
    const params: { [key: string]: unknown } = {}
    const queries = url.substring(1).split('&')
    queries.forEach((query) => {
      const [key, value] = query.split('=')
      params[key] = parseBooleanAndNumber(value)
    })
    return params as T
  }
  return {} as T
}

// ==== Get params from URL
export const getParamsFromUrl = (url: string): { [key: string]: any } => {
  const searchParams = new URLSearchParams(new URL(url).search)
  const params: { [key: string]: any } = {}
  searchParams.forEach((value, key) => {
    params[key] = parseBooleanAndNumber(value)
  })
  return params
}

// ==== Query Params URL
export const queryParamsURL = {
  get(): QueryParamsType {
    const qs = window.location.search
    return queryStringToObj(qs)
  },
  set(queryObj: QueryParamsType): QueryParamsType {
    const qs = this.get()
    const newQueryString = queryObjToString({ ...qs, ...queryObj })

    window.history.replaceState(this.get(), '', newQueryString)
    return queryStringToObj(newQueryString)
  },
  update(callback: (query: QueryParamsType) => QueryParamsType): QueryParamsType {
    const qs = this.get()
    const queryObj = callback(qs)
    const newQueryString = queryObjToString(queryObj)

    window.history.replaceState(this.get(), '', newQueryString)
    return queryStringToObj(newQueryString)
  },
  remove(queryArray: string[]): void {
    const qs = this.get()
    const queryObj = removeQueryParamsFromObject(qs, queryArray)

    window.history.replaceState(this.get(), '', queryObjToString(queryObj))
  },
  reset() {
    const newUrl = window.location.origin + window.location.pathname
    window.history.replaceState({}, document.title, newUrl)
  },
}
