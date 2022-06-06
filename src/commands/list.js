import chalk from 'chalk'
import Table from 'cli-table'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function list() {    
    let filepath = path.join(__dirname, '../data/todos.json')

    fs.access(filepath, fs.constants.R_OK, (err) => {
        if(err){
            return console.log(chalk.yellow.bold('You doesn\'t have todos'))
        }

        fs.readFile(filepath, 'utf8', (err, data) =>{
            
            if(err) return console.log(chalk.yellow.bold('You doesn\'t have todos'))

            let todos = JSON.parse(data)

            if (!todos || todos.length === 0) return console.log(chalk.yellow.bold('You doesn\'t have todos'));
        
            createTable(todos)
        })
    })
}


function createTable(data){
    let table = new Table({
        head: ['ID', 'Task', 'State']
    })
    
    data.forEach((val, idx) =>{
        table.push(
            [idx, val.text, val.state]
        )
    })

    console.log(table.toString())
}