import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function unmark(str) {
    let filepath = path.join(__dirname, '../data/todos.json')

    fs.access(filepath, fs.constants.R_OK, (err)=>{
        if(err) return console.log(chalk.yellow.bold('Você não possui nenhum Todo'))

        fs.readFile(filepath, (err, data)=>{
            let todos = JSON.parse(data)
            if (!todos || todos.length === 0) return console.log(chalk.yellow.bold('You doesn\'t have todos'));

            let newTodos = todos.map((todo, idx)=>{
                if(idx == str){
                    todo.state = 'active'
                    return todo
                }
                return todo
            })
            
            fs.writeFile(filepath, JSON.stringify(newTodos), () =>{
                console.log(`Todo ${str} marked as active`)
            })
        })
    })


}