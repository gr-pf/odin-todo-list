// file : src/components/todo-list.js

import { renderTodo } from "./todo.js";
import { TodoList } from "../model/todo-list.js";
import { uiState } from "../controllers/ui-state.js";

/**
 *
 * @param {TodoList} todolist
 * @param {uiState} state
 */
export function renderTodoList(todolist, state = uiState) {
  const listOfNode = [];
  let todosToRender = filterTodoList(todolist, (state = uiState));

  todosToRender.forEach((todo) => {
    listOfNode.push(renderTodo(todo));
  });

  return listOfNode;
}

/**
 * Fonction pour filter les todos à affhicer en fonction
 * du state de l'UI
 * @param {TodoList} todolist
 * @param {uiState} state
 */
function filterTodoList(todolist, state = uiState) {
  let todosToRender = Array.from(todolist.todoList.values());
  const todoDone = uiState.todoDone ? 1 : 0;
  todosToRender = todosToRender.filter((todo) => todo.state === todoDone);

  if (state.tag) {
    todosToRender = todosToRender.filter((todo) => todo.tags.has(state.tag));
  }
  if (state.date) {
    todosToRender = todosToRender.filter(
      (todo) => todo.date.getTime() === state.date.getTime(),
    );
  }
  if (state.priority) {
    todosToRender = todosToRender.filter(
      (todo) => todo.priority === state.priority,
    );
  }
  return todosToRender;
}
