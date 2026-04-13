// file : src/init.js

import { singletonTodoList } from "./model/todo-list.js";
import { callForm, callTodoList } from "./controllers/todo.js";

export function initApp() {
  callForm(singletonTodoList, "add-todo", "main");
  callTodoList(singletonTodoList);
}
