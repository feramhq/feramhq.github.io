const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const pug = require('pug')

const parseYaml = (filePath) =>
  yaml.safeLoad(fs.readFileSync(path.join(__dirname, filePath)))

const fixingModules = parseYaml('./data/fixing-modules.yaml').modules
const warningModules = parseYaml('./data/warning-modules.yaml').modules
  .map(module => {
    module.image = module.image
      ? `/images/modules/${module.image}.png`
      : '/images/modules/default.png'
    return module
  })
const activeFixingModules = fixingModules.filter(
  module => module.state === 'ready'
)
const getModulesHtml = pug.compileFile(path.join(__dirname, 'modules.pug'))

console.log(getModulesHtml({
  fixingModules,
  activeFixingModules,
  warningModules,
}))
