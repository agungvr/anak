/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBlob } from 'blob-util'
import { vi } from 'vitest'
import { getBase64Image } from './getBase64Image'

describe('getBase64Image', () => {
  test('should returns correct base64 image data', async () => {
    const imageUrl = 'https://example.com/image.jpg'
    const imageBlob = createBlob(['image data'], { type: 'image/jpeg' })
    const mockFetchPromise = Promise.resolve({ blob: () => imageBlob })
    ;(global as any).fetch = vi.fn().mockImplementation(() => mockFetchPromise)
    const result = await getBase64Image(imageUrl)
    expect(result).toBe('aW1hZ2UgZGF0YQ==') // base64 encoded version of 'image data'
  })
})
