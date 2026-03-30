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
  liTodo.className = "todo-item";

  // On utilise .innerHTML pour gérer la structuration du DOM
  liTodo.innerHTML = `
    <div class="todo-wrapper">
      <input type="checkbox" class="todo-checkbox">

      <h3 class="todo-name"></h3>
      <p class="todo-content"></p>
      
      <span class="todo-attributes">
      </span>

    </div>
        `;

  // On utilise .textContent pour intégrer de manière safe
  // les inputs utilisateur
  liTodo.querySelector(".todo-name").textContent = todo.name;
  liTodo.querySelector(".todo-content").textContent = todo.content ?? "";
  liTodo.querySelector(".todo-checkbox").id = `id-${todo.id}`;
  liTodo.querySelector(".todo-checkbox").name = `id-${todo.id}`;

  const spanAttributes = liTodo.querySelector(".todo-attributes");
  if (todo.date) {
    spanAttributes.innerHTML += `<p class="todo-date"></p>`;
    spanAttributes.querySelector(".todo-date").textContent =
      `${todo.date.getDate()}-${todo.date.getMonth()}-${todo.date.getFullYear()}`;
  }
  if (todo.tags) {
    spanAttributes.innerHTML += `<span class="todo-tags"></span>`;
    const spanTags = spanAttributes.querySelector(".todo-tags");
    const tags = Array.from(todo.tags);
    for (let i = 0; i < tags.length; i++) {
      spanTags.innerHTML += `<p class="todo-tag tag${i}"></p>`;
      spanTags.querySelector(`.todo-tag.tag${i}`).textContent = tags[i];
    }
  }
  return liTodo;
}
