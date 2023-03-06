export const getBase64Image = async (url: string): Promise<string> => {
  const response = await fetch(url)
  const blob = await response.blob()

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64data = reader.result as string
      resolve(base64data.replace(/^data:.+;base64,/, ''))
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}
