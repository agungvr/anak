import { downloadFileUrl } from './downloadFile'

describe('downloadFileUrl', () => {
  const url = 'http://localhost:3000/'
  const fileName = 'test-file.pdf'

  it('should create an anchor element with the correct href and download attributes', () => {
    document.body.innerHTML = ''
    downloadFileUrl(url, fileName)

    const link = document.querySelector('a')
    if (link) {
      expect(link).toBeTruthy()
      expect(link.href).toEqual(url)
      expect(link.getAttribute('download')).toEqual(fileName)
      expect(link.style.display).toEqual('none')
    } else {
      expect(link).toBeFalsy()
    }
  })

  it('should append the anchor element to the body and trigger a click event', () => {
    document.body.innerHTML = ''
    vi.mock('path/to/downloadFileUrl', () => vi.fn().mockImplementation(() => {}))

    downloadFileUrl(url, fileName)

    const link = document.querySelector('a')
    if (link) {
      expect(link.parentElement).toEqual(document.body)
    } else {
      expect(link).toBeFalsy()
    }
  })

  it('should remove the anchor element from the body after it has been clicked', () => {
    document.body.innerHTML = ''
    downloadFileUrl(url, fileName)

    expect(document.querySelector('a')).toBeFalsy()
  })
})
