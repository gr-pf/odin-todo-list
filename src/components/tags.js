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
    <a href="#" class="tag-btn ${tags[i]}">   
    ${svgPound} 
    ${tags[i]}
    </a>
    </li>
    `;
  }
  return tagList;
}

const svgPound = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg">
  <title>pound</title>
  <path d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" />
  </svg>`;
