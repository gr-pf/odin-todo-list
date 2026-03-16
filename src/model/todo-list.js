import { Todo } from "./todo.js";

export const TODO_LIST = {};

export class TodoList {
  #tags = new Set();

  constructor() {
    this.todoList = new Map();
  }

  /**
   *
   * @param {Todo} Todo
   */
  addTodo(Todo) {
    if (this.todoList.has(Todo.id)) {
      return console.log("Todo déjà dans la liste");
    } else {
      this.todoList.set(Todo.id, Todo);
    }
  }

  /**
   *
   * @param {Todo} Todo
   */
  removeTodo(Todo) {
    if (!this.todoList.has(Todo.id)) {
      return console.log("Todo n'est pas dans la liste");
    } else {
      this.todoList.delete(Todo.id);
    }
  }

  get tags() {
    return this.#tags;
  }
}

const todo01 = new Todo({ name: "todo-one1" });
const todo02 = new Todo({ name: "todo-two" });
const todo03 = new Todo({ name: "todo-three" });

const newList = new TodoList();

newList.addTodo(todo01);
newList.addTodo(todo02);
newList.addTodo(todo03);
newList.removeTodo(todo02);
newList.removeTodo(todo02);
newList.addTodo(todo01);
console.log(newList.todoList);
