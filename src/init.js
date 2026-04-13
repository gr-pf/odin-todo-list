// file : src/init.js

import { TodoList, singletonTodoList } from "./model/todo-list.js";
import { Todo } from "./model/todo.js";
import { callForm, callTodoList } from "./controllers/todo.js";

export function initApp() {
  loadStorage(singletonTodoList);
  callForm(singletonTodoList, "add-todo", "main");
  callTodoList(singletonTodoList);
}

/**
 * Charge les données depuis le localstorage
 * @param {TodoList} todolist
 */
function loadStorage(todolist = singletonTodoList) {
  if (localStorage.getItem("todolist")) {
    const objTodoList = JSON.parse(localStorage.getItem("todolist"));
    Object.values(objTodoList).forEach(function (todo) {
      if (todo.date) {
        todo.date = new Date(todo.date);
      }
      const newTodo = new Todo(todo);
      todolist.addTodo(newTodo);
    });
  }
}
