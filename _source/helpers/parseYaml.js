const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

module.exports = (filePath) => {
  const filePathAbsolute = path.resolve(__dirname, '..', filePath)
  const fileContent = fs.readFileSync(filePathAbsolute)
  return yaml.safeLoad(fileContent)
}
