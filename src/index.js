import { TodoList } from "./model/todo-list.js";
import { Todo } from "./model/todo.js";
import { renderTodo } from "./components/todo.js";
import { renderFormTodo } from "./components/add-todo-form.js";
import { callForm, callTodoList } from "./controllers/todo.js";
import { renderTodoList } from "./components/todo-list.js";
import "./style.css";

const TODO_LIST = new TodoList();
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

const newList = new TodoList();

console.log(newList);
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
console.log("todolist:");
console.log(newList);

const ulTodoList = document.querySelector(".todo-list");
const pseudoTodo = document.querySelector("#anchor-todolist");
// newList.todoList.forEach((todo, id) =>
//   ulTodoList.appendChild(renderTodo(todo)),
// );

//renderTodoList(newList).forEach((todo) => ulTodoList.append(todo));
console.log(renderTodoList(newList));
callForm(newList, "add-todo", "main");
callTodoList(newList);
