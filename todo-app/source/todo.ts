import { FileIO } from './fileio';

/*Command Line Todo application
=============================

Command line arguments:
 -l   Lists all the tasks
 -a   Adds a new task
 -r   Removes a task
 -c   Completes a task*/

export class ToDo extends FileIO {
    private filePath: string;
    constructor(filePath: string) {
        super();
        this.filePath = filePath;
    }
    printUsage() {
        return `
        Command Line Todo application
        =============================
        
        Command line arguments:
         -l   Lists all the tasks
         -a   Adds a new task
         -r   Removes a task
         -c   Completes a task`;
    }
    listTasks() {
        const fileContent = this.readFile(this.filePath); //mivel másik classból returnölünk, el kell menteni változóba a beolvasást
        if (fileContent !== null) {
            fileContent.split('\r\n').forEach((e, i) => { //splitel sorokra
                if (e.length < 1){
                    console.log(`nocxjmo`);
                } else {
                console.log(`${i + 1} - ${e}`); //kiírja a sorokat}
                }
            });
        } 
    }
    addNewTask(task: string): void {
        this.appendFile(this.filePath, task);
    }
}

let mytodo = new ToDo('file.txt');
mytodo.listTasks();