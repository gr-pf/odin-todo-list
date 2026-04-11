// file : src/components/tags.js

import { uiState } from "../controllers/ui-state.js";

/**
 * Function pour modifier le h1 du main
 * @param {uiState} state
 */
export function renderMainTitle(state = uiState) {
  const elementH1 = document.querySelector("h1");
  if (state.tag) {
    elementH1.textContent = `Les Todos avec le tag : ${state.tag}`;
  } else if (state.date) {
    elementH1.textContent = `Les Todos à la date : ${state.date}`;
  } else {
    elementH1.textContent = `Bienvenue sur Ma TodoList`;
  }
}
