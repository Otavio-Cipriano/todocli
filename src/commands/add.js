import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { v4 as uuidV4 } from 'uuid'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export default function add(str) {
    let filepath = path.join(__dirname, '../data/todos.json')
    let content = {text: str, state: 'active'}

    fs.access(filepath, fs.constants.R_OK, (err) => {
        if (err && err.code === "ENOENT") {
            fs.mkdir(path.join(__dirname, '../data/'), (err) => {
                if (err) return console.log(err);


                fs.writeFile(filepath, JSON.stringify([content]), (err) => {
                    if (err) return console.log(err)


                    return console.log(chalk.green.bold('Todo created'))
                })
            })
            return
        }



        fs.readFile(filepath, (err, data) => {
            if (err) return console.log(err);
            
            let json = JSON.parse(data)
            let newData = [content, ...json]

            fs.writeFile(filepath, JSON.stringify(newData), (err) => {
                if (err) return console.log(err);

                return console.log(chalk.green.bold('Todo created'))
            })
        })
    })
}
