// file : src/components/tags.js

import { TodoList } from "../model/todo-list.js";

/**
 *
 * @param {TodoList} todolist
 * @returns {HTMLElement}
 */
export function renderTagsList(todolist) {
  const tagList = document.createElement("ul");
  tagList.className = "tags-list";
  const tags = Array.from(todolist.tags);
  for (let i = 0; i < tags.length; i++) {
    tagList.innerHTML += `
    <li class="tag-item ${tags[i]}">
    <a href="#" class="tag-btn ${tags[i]}"></a>
    </li>
    `;
    tagList.querySelector(`.tag-btn.${tags[i]}`).textContent = `${tags[i]}`;
  }
  return tagList;
}
