import { TodoList, singletonTodoList } from "./model/todo-list.js";
import { Todo } from "./model/todo.js";
import { renderTodo } from "./components/todo.js";
import { renderFormTodo } from "./components/add-todo-form.js";
import { callForm, callTodoList } from "./controllers/todo.js";
import { renderTodoList } from "./components/todo-list.js";
import "./style.css";

const TODO_LIST = singletonTodoList;
window.TODO_LIST = TODO_LIST;

const todo01 = new Todo({
  name: "todo-one1",
  priority: "medium",
  date: new Date(2026, 2, 25),
  content: "Ceci est un contenu test",
  tags: ["cine", "tv", "work"],
});
const todo02 = new Todo({ name: "todo-two", tags: ["cine", "tv"] });
const todo03 = new Todo({ name: "todo-three", tags: ["food", "tv"] });

console.log(singletonTodoList);
console.log(singletonTodoList.tags);
singletonTodoList.addTodo(todo01);
console.log(singletonTodoList.tags);
singletonTodoList.addTodo(todo02);
singletonTodoList.addTodo(todo03);
console.log(singletonTodoList.tags);
singletonTodoList.removeTodo(todo02);
singletonTodoList.removeTodo(todo02);
singletonTodoList.addTodo(todo01);
console.log(singletonTodoList.todoList);
console.log(singletonTodoList.tags);
console.log(singletonTodoList.todoList.values().next().value.name);
console.log("todolist:");
console.log(singletonTodoList);

const ulTodoList = document.querySelector(".todo-list");
const pseudoTodo = document.querySelector("#anchor-todolist");
// singletonTodoList.todoList.forEach((todo, id) =>
//   ulTodoList.appendChild(renderTodo(todo)),
// );

//renderTodoList(singletonTodoList).forEach((todo) => ulTodoList.append(todo));
console.log(renderTodoList(singletonTodoList));
callForm(singletonTodoList, "add-todo", "main");
callTodoList(singletonTodoList);
