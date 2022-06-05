#!/usr/bin/env node

// import { commands } from "./commands/_index.js";
import { program } from "commander";
import add from "./commands/add.js";
import list from "./commands/list.js";

program
.command('list')
.description('Command to list all todos your todos')
.action(list)

program
.command('add')
.description('Command to Add a new todo to your list')
.argument('<string>', 'string to add as a todo to your list')
.action(add)

program.parse()