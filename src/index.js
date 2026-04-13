import { TodoList, singletonTodoList } from "./model/todo-list.js";
import { Todo } from "./model/todo.js";
import { renderTodo } from "./components/todo.js";
import { renderFormTodo } from "./components/add-todo-form.js";
import { renderTodoList } from "./components/todo-list.js";
import { callForm, callTodoList, callTag } from "./controllers/todo.js";
import { uiState } from "./controllers/ui-state.js";
import { randomTodos } from "./tests/generate-todo.js";
import "./style.css";

const TODO_LIST = singletonTodoList;
window.TODO_LIST = TODO_LIST;
const globalState = uiState;
window.globalState = globalState;

const todo01 = new Todo({
  name: "todo-one1",
  priority: "medium",
  date: new Date(2026, 2, 25),
  content: "Ceci est un contenu test",
  tags: ["cine", "tv", "work"],
});
const todo02 = new Todo({ name: "todo-two", tags: ["cine", "tv"] });
const todo03 = new Todo({ name: "todo-three", tags: ["food", "tv"] });
const todo04 = new Todo({ name: "todo-three", tags: null });

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
singletonTodoList.addTodo(todo04);
console.log(singletonTodoList.todoList);
console.log(singletonTodoList.tags);
console.log(singletonTodoList.todoList.values().next().value.name);
console.log("todolist:");
console.log(singletonTodoList);

randomTodos.forEach((todo) => singletonTodoList.addTodo(new Todo(todo)));

console.log(renderTodoList(singletonTodoList));
callForm(singletonTodoList, "add-todo", "main");
callTodoList(singletonTodoList, undefined, undefined);
