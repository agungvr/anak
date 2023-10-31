const axios = require('axios')
const fs = require('fs')
const path = require('path')

const repoOwner = 'astronautsid'
const repoName = 'astro-design-token'
const filePath = 'tokens.json'
const rawUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/develop/${filePath}`
const accessToken = process.env.GITHUB_ACCESS_TOKEN

const axiosConfig = {
  headers: {
    Authorization: `token ${accessToken}`,
  },
  responseType: 'json',
}

async function downloadFile() {
  try {
    const response = await axios.get(rawUrl, axiosConfig)
    const jsonData = response.data
    const jsonString = JSON.stringify(jsonData, null, 2)
    const folderDestination = path.join(__dirname, './', 'tokens.json')

    fs.writeFileSync(folderDestination, jsonString)
    console.log('File downloaded successfully!')
  } catch (error) {
    console.error('Error downloading the file:', error.message)
  }
}

downloadFile()
