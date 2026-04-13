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

const todo01 = new Todo({
  name: "todo-one1",
  priority: "medium",
  date: new Date(2026, 2, 25),
  content: "Ceci est un contenu test",
  tags: ["cine", "tv", "work"],
});
const todo02 = new Todo({ name: "todo-two", tags: ["cine", "tv"] });
const todo03 = new Todo({ name: "todo-three", tags: ["food", "tv"] });
const todo04 = new Todo({ name: "todo-three", tags: null });
singletonTodoList.addTodo(todo01);
singletonTodoList.addTodo(todo02);
singletonTodoList.addTodo(todo03);
singletonTodoList.addTodo(todo04);

const objToStr = stringifyTodolist(singletonTodoList);

console.log(objToStr);
console.log(JSON.parse(objToStr));
