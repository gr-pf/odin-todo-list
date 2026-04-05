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
    if (TodoList.instance) {
      throw new Error("You can only create one instance!");
    }
    TodoList.instance = this;
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

export const singletonTodoList = Object.freeze(new TodoList());
