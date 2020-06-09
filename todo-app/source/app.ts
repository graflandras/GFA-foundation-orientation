import { ToDo } from './todo';

let benceTodo = new ToDo('text.txt');
let szirmiTodo = new ToDo('filecica.txt');

const myBeautyTodoList = (todo: ToDo) => {
    const doIt = process.argv.splice(2);
    console.log(doIt);
    switch (doIt[0]) {
        case '-l': {
            todo.listTasks();
            break;
        }
        case '-a': {
            if (doIt[1]) {
                todo.addNewTask(`\r\n${doIt[1]}\r\n`);
            } else {
                console.log('give me a todo');
            }
            break;
        }
        case '-h': {
            console.log(todo.printUsage());
            break;
        }
        case '-e': {
            todo.emptyList();
            break;
        }
        default: {
            console.log('wrong arguments');
            console.log(todo.printUsage());
        }
    }
}

myBeautyTodoList(benceTodo);