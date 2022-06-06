import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export default function remove(str) {
    let filepath = path.join(__dirname, '../data/todos.json')

    fs.access(filepath, fs.constants.R_OK, (err)=>{
        if(err) return console.log(chalk.yellow.bold('Você não possui nenhum Todo'))

        fs.readFile(filepath, (err, data)=>{
            if(err) return console.log(err)

            let todos = JSON.parse(data)

            if (!todos || todos.length === 0) return console.log(chalk.yellow.bold('You doesn\'t have todos'));

            let newTodos = todos.filter((todo, idx) => idx != str)
            
            fs.writeFile(filepath, JSON.stringify(newTodos), () =>{
                console.log(`Todo ${str} marked as completed`)
            })
        })
    })
}
