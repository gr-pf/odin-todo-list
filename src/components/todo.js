// file : src/components/todo.js

import { Todo } from "./model/todo.js";

/**
 *
 * @param {Todo} todo
 */
export function renderTodo(todo) {
  if (!(todo instanceof Todo)) {
    throw new TypeError("todo doit être une instance de Todo");
  }
  const liTodo = document.createElement("li");
  liTodo.innerHTML = `
            <h3 class="todo-name"></h3>
            <p class="todo-content"></p>
        `;
  liTodo.querySelector(".todo-name").textContent = todo.name;
  liTodo.querySelector(".todo-content").textContent = todo.content ?? "";

  return liTodo;
}
