const fs = require("fs")
const moment = require("moment")

// grab and update pathNum
const pathNum = fs.readFileSync("./templatePathNum.txt").toString() * 1 + 1
fs.writeFileSync("templatePathNum.txt", pathNum)

let template = fs.readFileSync("./template.md").toString()

const today = moment().format("YYYY/MM/DD")
// const pathNum = template.split('~')[1]*1 + 1
// template = template.replace(/~([^~]*)~/, pathNum)
template = template.replace("today", today)
template = template.replace("pathNum", pathNum)

const directory = moment().format("YYYY-MM")
const subDirectory = moment().format("YYYY-MM-DD")

fs.writeFileSync(`src/pages/${directory}/${subDirectory}/index.md`, template)
