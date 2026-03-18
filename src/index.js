import { TodoList } from "./model/todo-list.js";
import { Todo } from "./model/todo.js";
import "./style.css";

const TODO_LIST = new TodoList();
window.TODO_LIST = TODO_LIST;

const todo01 = new Todo({ name: "todo-one1", tags: "work" });
const todo02 = new Todo({ name: "todo-two", tags: ["cine", "tv"] });
const todo03 = new Todo({ name: "todo-three", tags: ["food", "tv"] });

const newList = new TodoList();

console.log(newList.tags);
newList.addTodo(todo01);
console.log(newList.tags);
newList.addTodo(todo02);
newList.addTodo(todo03);
console.log(newList.tags);
newList.removeTodo(todo02);
newList.removeTodo(todo02);
newList.addTodo(todo01);
console.log(newList.todoList);
console.log(newList.tags);
console.log(newList.todoList.values().next().value.name);
