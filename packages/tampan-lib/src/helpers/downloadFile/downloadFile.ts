export const downloadFileUrl = (url: string, fileName: string) => {
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', fileName)
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
