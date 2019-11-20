const fs = require("fs")
const moment = require("moment")

// grab and update pathNum
const pathNum = fs.readFileSync("./templatePathNum.txt").toString() * 1 + 1
fs.writeFileSync("templatePathNum.txt", pathNum)

let template = fs.readFileSync("./template.md").toString()

const today = moment().format("YYYY/MM/DD")

template = template.replace("today", today)
template = template.replace("pathNum", pathNum)

const directory = moment().format("YYYY-MM")
const subDirectory = moment().format("YYYY-MM-DD")

fs.writeFileSync(`src/pages/${directory}/${subDirectory}/index.md`, template)
fs.writeFileSync(`src/templates/data.js`, `export const maxPage = ${pathNum}`)
