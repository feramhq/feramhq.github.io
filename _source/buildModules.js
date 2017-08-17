const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const pug = require('pug')

const parseYaml = (filePath) =>
  yaml.safeLoad(fs.readFileSync(path.join(__dirname, filePath)))

const fixingModules = parseYaml('./data/fixing-modules.yaml')
  .modules
  .map(module => {
    if (module.image) {
      module.image = `/images/modules/${module.image}`
      if (!module.image.includes('.')) {
        module.image += '.png'
      }
    }
    return module
  })
  .sort((moduleA, moduleB) => String(moduleA.state)
    .localeCompare(String(moduleB.state))
  )
const activeFixingModules = fixingModules.filter(
  module => module.state === 'ready'
)
const getModulesHtml = pug
  .compileFile(path.join(__dirname, 'features.pug'))

console.info(getModulesHtml({
  fixingModules,
  activeFixingModules,
}))
