// file : src/controllers/todo.js

import { renderFormTodo } from "../components/add-todo-form.js";
import { renderTodoList } from "../components/todo-list.js";
import { Todo } from "../model/todo.js";
import { TodoList } from "../model/todo-list.js";

/**
 *
 * @param {Object} formObject
 * @returns {Todo}
 */
function createTodoFromForm(formObject) {
  const todoObject = {};

  todoObject.name = formObject["form-todo-name"];
  todoObject.content = formObject["form-todo-content"];

  todoObject.date = formObject["form-todo-date"]
    ? new Date(formObject["form-todo-date"])
    : undefined;

  todoObject.priority = formObject["form-todo-priority"]
    ? formObject["form-todo-priority"]
    : null;

  const tagsList = Object.entries(formObject)
    .filter((entry) => entry[0].slice(0, 3) === "tag")
    .map((x) => x[1]);

  if (tagsList.length !== 0) {
    todoObject.tags = tagsList;
    if (formObject["form-todo-add-tag"]) {
      todoObject.tags.push(formObject["form-todo-add-tag"]);
    }
  } else if (formObject["form-todo-add-tag"]) {
    todoObject.tags = formObject["form-todo-add-tag"];
  }

  const newTodo = new Todo(todoObject);
  return newTodo;
}

/**
 *
 * @param {Event} event
 */
function createSubmitHandler(todolist) {
  return function (event) {
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    const newTodo = createTodoFromForm(formObject);
    event.target.parentElement.remove();
    todolist.addTodo(newTodo);
  };
}

/**
 *
 * @param {Event} event
 */
function closeForm(event) {
  event.target.remove();
}

/**
 *
 * @param {TodoList} todolist
 * @param {String} elContainer
 */
function addFormToDom(todolist, elContainer) {
  const form = renderFormTodo(
    todolist,
    createSubmitHandler(todolist),
    closeForm,
  );
  const container = document.querySelector(`${elContainer}`);
  container.appendChild(form);
  form.showModal();
}

/**
 *
 * @param {TodoList} todolist
 * @param {String} className
 * @param {String} elContainer
 */
export function callForm(todolist, className, elContainer) {
  const listEl = document.querySelectorAll(`.${className}`);
  listEl.forEach((el) =>
    el.addEventListener("click", () => addFormToDom(todolist, elContainer)),
  );
}

/**
 *
 * @param {TodoList} todolist
 * @param {HTMLElement} element
 */
export function callTodoList(todolist, element) {
  renderTodoList(todolist).forEach((el) =>
    element.insertAdjacentElement("beforebegin", el),
  );
}
