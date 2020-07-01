const fs = require("fs")
const moment = require("moment")

const directory = moment().format("YYYY-MM")
const subDirectory = moment().format("YYYY-MM-DD")
const templateOutputDirectory = `src/pages/${directory}/${subDirectory}/index.md`

const templateAlreadyExists = fs.existsSync(templateOutputDirectory)

if (templateAlreadyExists) {
  throw new Error("Template has already been created today.")
}

fs.mkdirSync(
  `src/pages/${directory}/${subDirectory}`,
  { recursive: true },
  err => {
    if (err) throw err
  }
)

// grab and update pathNum
const pathNum = JSON.parse(fs.readFileSync("./templatePathNum.txt")) + 1
fs.writeFileSync("templatePathNum.txt", pathNum)

const today = moment().format("YYYY/MM/DD")

let template = fs
  .readFileSync("./template.md")
  .toString()
  .replace("$TODAY", today)
  .replace("$PATHNUM", pathNum)

fs.writeFileSync(templateOutputDirectory, template)
fs.writeFileSync(`src/templates/data.js`, `export const maxPage = ${pathNum}`)
