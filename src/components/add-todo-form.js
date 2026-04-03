// file : src/components/add-todo-form.js
import { TodoList } from "../model/todo-list.js";

/**
 *
 * @param {TodoList} todolist
 * @param {Function} onClose
 * @param {Function} onSubmit
 * @returns {HTMLElement}
 */
export function renderFormTodo(todolist, onSubmit, onClose) {
  const dialogFormTodo = document.createElement("dialog");
  dialogFormTodo.classList = "form-todo-wrapper";

  dialogFormTodo.innerHTML = `
    <form class="form-todo" method="dialog" action="#">
        <label for="form-todo-name">Nom de la ToDo</label>
        <input type="text" id="form-todo-name" name="form-todo-name" required></input>
        <label for="form-todo-content">Description de la ToDo</label>
        <textarea id="form-todo-content" name="form-todo-content"></textarea>
        <label for="form-todo-date">Date de la ToDo</label>
        <input type="date" id="form-todo-date" name="form-todo-date"></input>
        <label for="form-todo-priority">Priorité :</label>
        <select id="form-todo-priority" name="form-todo-priority">
        <option value=""></option>
        <option value="high">haute</option>
        <option value="medium">moyenne</option>
        <option value="low">basse</option>
        </select >
        <label for="form-todo-add-tag">Ajouter un tag</label>
        <input type="text" id="form-todo-add-tag" name="form-todo-add-tag"></input>
    </form>
  `;

  const form = dialogFormTodo.querySelector(".form-todo");
  if (todolist.tags.size !== 0) {
    const tagsEl = document.createElement("div");
    tagsEl.classList = "form-todo-tags";
    form.appendChild(tagsEl);
    const tags = Array.from(todolist.tags);
    for (let i = 0; i < tags.length; i++) {
      const tagSpan = document.createElement("span");
      tagSpan.classList = "form-todo-tag";
      const label = document.createElement("label");
      label.htmlFor = `${tags[i]}`;
      label.textContent = `${tags[i]}`;
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = `${tags[i]}`;
      input.value = `${tags[i]}`;
      tagSpan.appendChild(input);
      tagSpan.appendChild(label);
      tagsEl.appendChild(tagSpan);
    }
  }

  const submitBtn = document.createElement("input");
  form.appendChild(submitBtn);
  submitBtn.type = "submit";
  submitBtn.value = "Créer ToDo";
  submitBtn.classList = "form-todo-btn";

  dialogFormTodo.addEventListener("submit", onSubmit);
  dialogFormTodo.addEventListener("close", onClose);

  return dialogFormTodo;
}
