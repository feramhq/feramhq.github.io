const path = require('path')
const pug = require('pug')
const marked = require('marked')

const parseYaml = require('./parseYaml')

const questionsAndAnswers = parseYaml('data/questions-and-answers.yaml')
  .map(qAndA => Object.assign(
    {},
    qAndA,
    {answer: marked(qAndA.answer)}
  ))

const getFaqHtml = pug.compileFile(
  path.resolve(__dirname, '../help.pug'),
)

console.info(getFaqHtml({questionsAndAnswers}))
