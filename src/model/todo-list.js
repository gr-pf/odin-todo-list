// file : src/model/todo-list.js

import { Todo } from "./todo.js";

export class TodoList {
  #tags;
  #todoList;

  /**
   *
   * @param {Array.<string>|string} tags
   */
  static #validateTags(tags) {
    if (
      !(typeof tags === "string") &&
      !Array.isArray(tags) &&
      !(typeof tags === "undefined")
    ) {
      throw TypeError(
        `tags doit être une string ou un array, reçu : ${tags} (${typeof tags})`,
      );
    }
  }

  constructor() {
    this.#todoList = new Map();
    this.#tags = new Set();
  }

  /**
   *
   * @param {Todo} todo
   */
  addTodo(todo) {
    if (this.todoList.has(todo.id)) {
      return console.log("Todo déjà dans la liste");
    } else {
      this.todoList.set(todo.id, todo);
      this.addTags(Array.from(todo.tags));
    }
  }

  /**
   *
   * @param {Todo} todo
   */
  removeTodo(todo) {
    if (!this.todoList.has(todo.id)) {
      return console.log("Todo n'est pas dans la liste");
    } else {
      this.todoList.delete(todo.id);
      this.updateTags();
    }
  }

  get tags() {
    return this.#tags;
  }

  get todoList() {
    return this.#todoList;
  }

  /**
   *
   * @param {string|Array.<string>} newTags
   */
  addTags(newTags) {
    TodoList.#validateTags(newTags);
    if (typeof newTags === "string") {
      this.#tags.add(newTags);
    } else if (typeof newTags !== "undefined") {
      newTags.forEach((newTag) => this.#tags.add(newTag));
    }
  }

  updateTags() {
    this.#tags = new Set();
    this.todoList.forEach(function (value) {
      this.addTags(Array.from(value.tags));
    }, this);
  }
}

const todo01 = new Todo({ name: "todo-one1", tags: "work" });
const todo02 = new Todo({ name: "todo-two", tags: ["cine", "tv"] });
const todo03 = new Todo({ name: "todo-three", tags: ["food", "tv"] });

const newList = new TodoList();

console.log(newList.tags);
newList.addTodo(todo01);
console.log(newList.tags);
newList.addTodo(todo02);
newList.addTodo(todo03);
console.log(newList.tags);
newList.removeTodo(todo02);
newList.removeTodo(todo02);
newList.addTodo(todo01);
console.log(newList.todoList);
console.log(newList.tags);
console.log(newList.todoList.values().next().value.name);
