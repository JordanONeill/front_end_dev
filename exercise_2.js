"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (x) {
        var y;
        this.tasks.push(x);
        console.log("=========== NEW TASK ===========");
        console.log('Task "' + x + '" inserted in the list');
        y = this.tasks.length;
        return y;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("");
        console.log("START: Items on list");
        console.log("");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("");
        console.log("END: Items on list");
        console.log("");
    };
    Todo.prototype.deleteTask = function (x) {
        var key = x;
        var index = this.tasks.indexOf(key, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log("=========== TASK REMOVED ===========");
        console.log('Task "' + x + '" removed from the list');
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('This is our second task!!!'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('This is our second task!!!'));
myTodos.listAllTasks();
