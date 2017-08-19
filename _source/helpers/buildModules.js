const path = require('path')
const pug = require('pug')

const parseYaml = require('./parseYaml')

const fixingModules = parseYaml('data/fixing-modules.yaml')
  .modules
  .map(module => {
    if (!module.image) return module

    module.image = `/images/modules/${module.image}`
    if (!module.image.includes('.')) {
      module.image += '.png'
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
  .compileFile(path.resolve(__dirname, '../features.pug'))

console.info(getModulesHtml({
  fixingModules,
  activeFixingModules,
}))
