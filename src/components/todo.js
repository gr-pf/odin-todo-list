// file : src/components/todo.js

import { Todo } from "../model/todo.js";

// Implémentation à terminer

/**
 *
 * @param {Todo} todo
 */
export function renderTodo(todo) {
  if (!(todo instanceof Todo)) {
    throw new TypeError("todo doit être une instance de Todo");
  }
  const liTodo = document.createElement("li");

  // On utilise .innerHTML pour gérer la structuration du DOM
  liTodo.innerHTML = `
            <h3 class="todo-name"></h3>
            <p class="todo-content"></p>
        `;

  // On utilise .textContent pour intégrer de manière safe
  // les inputs utilisateur
  liTodo.querySelector(".todo-name").textContent = todo.name;
  liTodo.querySelector(".todo-content").textContent = todo.content ?? "";

  return liTodo;
}
