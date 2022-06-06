#!/usr/bin/env node
import { program } from "commander";
import add from "./commands/add.js";
import list from "./commands/list.js";
import mark from "./commands/mark.js";

program
.name('todo-cli')
.description("Cli to manage todo")
.version('0.0.1')

program
.command('list')
.description('Command to list all todos your todos')
.action(list)

program
.command('add')
.description('Command to Add a new todo to your list')
.argument('<string>', 'string to add as a todo to your list')
.action(add)

program
.command('mark')
.description('Command to mark a todo as complete')
.argument('<string>', 'string to add as a todo to your list')
.action(mark)

program.parse()