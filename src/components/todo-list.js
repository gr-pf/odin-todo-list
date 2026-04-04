// file : src/components/todo-list.js

import { renderTodo } from "../components/todo.js";
import { Todo } from "../model/todo.js";

/**
 *
 * @param {TodoList} todolist
 * @param {string} tag
 */
export function renderTodoList(todolist) {
  const listOfNode = [];

  todolist.todoList.forEach((todo) => {
    listOfNode.push(renderTodo(todo));
  });

  return listOfNode;
}
