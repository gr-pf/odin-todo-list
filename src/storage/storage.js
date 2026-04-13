// file : src/storage/storage.js

import { TodoList, singletonTodoList } from "../model/todo-list.js";
import { Todo } from "../model/todo.js";

export function saveTodoList(todolist) {
  localStorage.setItem("todolist", stringifyTodolist(todolist));
}

/**
 * Transform todolist en string pour stockage
 * dans le local storage
 * @param {Todo} todolist
 * @returns {String}
 */
function stringifyTodolist(todolist) {
  const obj = {};
  todolist.todoList.forEach((todo) => addTodoToObj(todo, obj));

  return JSON.stringify(obj);
}

/**
 * Cb function pour ajouter les keys d'une Todo à l'objet
 * à stringifier
 * @param {Todo} todo
 * @param {Object} object
 */
function addTodoToObj(todo, object) {
  const objTodo = {};
  objTodo.name = todo.name;
  objTodo.content = todo.content;
  objTodo.date = todo.date;
  objTodo.priority = todo.priority;
  objTodo.tags = todo.tags.size !== 0 ? Array.from(todo.tags) : undefined;
  object[todo.id] = objTodo;
}
