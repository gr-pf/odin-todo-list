// file : src/components/todo-list.js

import { renderTodo } from "../components/todo.js";
import { TodoList } from "../model/todo-list.js";

/**
 *
 * @param {TodoList} todolist
 * @param {string} tag
 */
export function renderTodoList(todolist, tag = null) {
  const listOfNode = [];
  let currentList = [...todolist.todoList.values()];

  if (tag) {
    currentList = [...todolist.todoList.values()].filter((todo) =>
      todo.tags.has(tag),
    );
  }
  currentList.forEach((todo) => {
    listOfNode.push(renderTodo(todo));
  });

  return listOfNode;
}
