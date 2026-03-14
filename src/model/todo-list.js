import { Todo } from "./todo.js";

export const TODO_LIST = {};

/**
 *
 * @param {Todo} Todo
 */
export function addTodo(Todo) {
  if (Todo.id in TODO_LIST) {
    return console.log("Todo déjà dans la liste");
  } else {
    TODO_LIST[Todo.id] = Todo;
  }
}

/**
 *
 * @param {Todo} Todo
 */
export function removeTodo(Todo) {
  if (!(Todo.id in TODO_LIST)) {
    return console.log("Todo n'est pas dans la liste");
  } else {
    delete TODO_LIST[Todo.id];
  }
}

const todo01 = new Todo("todo1");
const todo02 = new Todo("todo2");
const todo03 = new Todo("todo3");

addTodo(todo01);
addTodo(todo02);
addTodo(todo03);
removeTodo(todo02);
removeTodo(todo02);
addTodo(todo01);
console.log(TODO_LIST);
