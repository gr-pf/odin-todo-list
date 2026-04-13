// file : src/controllers/todo.js

import { uiState } from "./ui-state.js";
import { renderFormTodo } from "../components/add-todo-form.js";
import { renderTodoList } from "../components/todo-list.js";
import { renderTagsList } from "../components/tags.js";
import { renderMainTitle } from "../components/main-title.js";
import { Todo } from "../model/todo.js";
import { TodoList } from "../model/todo-list.js";

/**
 *Fonction qui retourne une instance Todo depuis
 *les données du formulaire
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
 *Fonction closure pour le callback de l'event listener du button
 *de soumission du formulaire pour tenir compte de la todolist
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
    callTodoList(todolist);
  };
}

/**
 *Fonction pour fermer le formulaire après envoi
 *
 * @param {Event} event
 */
function closeForm(event) {
  event.target.remove();
}

/**
 * Fonction pour attacher le formulaire au DOM et l'afficher
 *
 * @param {TodoList} todolist
 * @param {String} elContainer
 */
function addFormToDom(todolist, elementContainer) {
  const form = renderFormTodo(
    todolist,
    createSubmitHandler(todolist),
    closeForm,
  );
  const container = document.querySelector(`${elementContainer}`);
  container.appendChild(form);
  form.showModal();
}

/**
 * Fonction pour attacher un event listener (click => Appelle un formulaire)
 * sur les bouttons "add-todo" et les ajouter au "main"
 * "add-todo", "main"
 * @param {TodoList} todolist
 * @param {String} className
 * @param {String} elContainer
 */
export function callForm(
  todolist,
  className = "add-todo",
  elementContainer = "main",
) {
  const listElement = document.querySelectorAll(`.${className}`);
  listElement.forEach((element) =>
    element.addEventListener("click", () =>
      addFormToDom(todolist, elementContainer),
    ),
  );
}

/**
 * Fonction pour attacher un event listener (click => Rafraichie la todolist)
 * sur les bouttons "tag-btn" de la nav-bar
 * @param {TodoList} todolist
 * @param {String} className - classe des éléments où attacher l'eventlistener
 * @param {uiState} state - état global de l'UI
 */
export function callTag(todolist, className = "tag-btn", state = uiState) {
  const listElement = document.querySelectorAll(`.${className}`);
  listElement.forEach((element) =>
    element.addEventListener("click", function () {
      state.tag = element.id;
      callMainTitle(state);
      callTodoList(todolist, undefined, element.id);
    }),
  );
}

/**
 * Fonction pour actualiser le rendu de la TodoList
 * @param {TodoList} todolist
 * @param {HTMLElement} element
 * @param {String|null} tag
 */
export function callTodoList(todolist, element = "#anchor-todolist") {
  const anchor = document.querySelector(element);
  const container = anchor.parentElement;
  container.replaceChildren(...renderTodoList(todolist), anchor);
  callTagsList(todolist);
  checkTodo(todolist);
}

/**
 * Fonction pour mettre à jour la liste des Tags dans la navbar
 * @param {TodoList} todolist
 * @param {String} element
 */
function callTagsList(todolist, element = "#navbar-tagslist") {
  const elementToAppend = document.querySelector(element);
  elementToAppend.replaceChildren(
    elementToAppend.firstElementChild,
    renderTagsList(todolist),
  );
  callTag(todolist);
}

function callMainTitle(state = uiState) {
  renderMainTitle(state);
}

/**
 * Fonction qui associe les eventlisteners sur les checkbox des todos pour
 * indiquer qu'elles sont "done"
 * @param {TodoList} todolist
 */
function checkTodo(todolist) {
  const checkboxes = document.querySelectorAll(".todo-checkbox");
  checkboxes.forEach((element) =>
    element.addEventListener("change", function (event) {
      const todoId = event.target.id.slice(3);
      todolist.todoList.get(todoId).toggleState();
      callTodoList(todolist);
    }),
  );
}
