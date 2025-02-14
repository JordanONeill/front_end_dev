// A. Create an array of strings
let tasks: Array<string> = [];
console.log("");
// B. Create a function to add a task in to the array, call it `addTask`,
//the function has to accept a string and doesn't have to return anything.
function addTask(task: string): number {
let y: number;
tasks.push(task);
console.log("=========== NEW TASK ===========");
console.log('Task "'+task+'" inserted in the list');
y=tasks.length;
return y;
}
// C. Create a function to list all tasks, it must show in the console the task.
function listAllTasks(){
console.log("");
console.log("START: Items on list");
console.log("");
tasks.forEach(function(task) {
    console.log(task);
    });
    console.log("");
    console.log("END: Items on list");
    console.log("");
    }
    // D. Create a function to delete a task, you must find the task inside
    // the array and delete it.
    function deleteTask(x: string): number{
    let key: string = x;
    let index: number = tasks.indexOf(key, 0);
    //https://www.tutorialspoint.com/typescript/typescript_array_indexof.htm
    if (index > -1) { // if >-1 this implies a match was found.
    tasks.splice(index, 1);
    //https://www.tutorialspoint.com/typescript/typescript_array_splice.htm
    }
    console.log("=========== TASK REMOVED ===========");
    console.log('Task "'+x+'" removed from the list');
    return tasks.length;
    }
    // Execution
    console.log("Number of items:", addTask('This is our first task'));
    console.log("Number of items:", addTask('This is our second task!!!'));
    listAllTasks();
    console.log("Number of items:", deleteTask('This is our second task!!!'));
    listAllTasks();
      //Class in something.ts
      import {todoInterface} from './todoInterface';
      class Todo implements todoInterface{
      constructor(){}
      tasks: Array<string>=[];
      addTask(x: string): number{
      let y: number;
      this.tasks.push(x);
      console.log("=========== NEW TASK ===========");
      console.log('Task "'+x+'" inserted in the list');
      y=this.tasks.length;
      return y;
      }
      listAllTasks(){
      console.log("");
      console.log("START: Items on list");
      console.log("");
  this.tasks.forEach(function(task) {
  console.log(task);
  });
  console.log("");
  console.log("END: Items on list");
  console.log("");
  }
  deleteTask(x: string): number{
  let key: string = x;
  let index: number = this.tasks.indexOf(key, 0);
  if (index > -1) {
  this.tasks.splice(index, 1);
  }
  console.log("=========== TASK REMOVED ===========");
  console.log('Task "'+x+'" removed from the list');
  return this.tasks.length;
  }
  }
  let myTodos = new Todo();
  console.log("Number of items:", myTodos.addTask('This is our first task'));
  console.log("Number of items:", myTodos.addTask('This is our second task!!!'));
  myTodos.listAllTasks();
  console.log("Number of items:", myTodos.deleteTask('This is our second task!!!'));
  myTodos.listAllTasks();