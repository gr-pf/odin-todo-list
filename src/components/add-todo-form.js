// file : src/components/add-todo-form.js
import { TodoList } from "../model/todo-list.js";

/**
 *
 * @param {TodoList} todolist
 * @returns {HTMLElement}
 */
export function renderFormTodo(todolist) {
  const liFormTodo = document.createElement("div");
  liFormTodo.classList = "form-todo-wrapper";

  liFormTodo.innerHTML = `
    <form class="form-todo">
        <label for="todo-name">Nom de la ToDo</label>
        <input type="text" id="todo-name" name="todo-name" required></input>
        <label for="todo-content">Description de la ToDo</label>
        <input type="textarea" id="todo-content" name="todo-content"></input>
        <label for="todo-date">Date de la ToDo</label>
        <input type="date" id="todo-date" name="todo-date"></input>
        <label for="todo-priority">Priorité :</label>
        <select id="todo-priority" name="todo-priority">
        <option value=""></option>
        <option value="high">haute</option>
        <option value="medium">moyenne</option>
        <option value="low">basse</option>
        </select >
        <label for="todo-add-tag">Ajouter un tag</label>
        <input type="text" id="todo-add-tag" name="todo-add-tag"></input>
    </form>
  `;

  if (todolist.tags) {
    const form = liFormTodo.querySelector(".form-todo");
    const tagsEl = document.createElement("div");
    tagsEl.classList = "tags";
    form.appendChild(tagsEl);
    const tags = Array.from(todolist.tags);
    for (let i = 0; i < tags.length; i++) {
      const label = document.createElement("label");
      label.htmlFor = `${tags[i]}`;
      label.textContent = `${tags[i]}`;
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = `${tags[i]}`;
      input.value = `${tags[i]}`;
      tagsEl.appendChild(input);
      tagsEl.appendChild(label);
    }
    return liFormTodo;
  }
}
/*
"high", "medium", "low"
#name;
#content;
#date;
#priority;
#tags = new Set();
#id;
#state;
*/
