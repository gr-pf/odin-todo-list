// file : src/index.js

import { TodoList, singletonTodoList } from "./model/todo-list.js";
import { Todo } from "./model/todo.js";
import { randomTodos } from "./tests/generate-todo.js";
import { initApp } from "./init.js";
import "./style.css";

const objstr = `{"70e862b5-f020-4171-8227-3948b9400002":{"name":"todo-one1","content":"Ceci est un contenu test","date":"2026-03-24T23:00:00.000Z","priority":"medium","tags":["cine","tv","work"]},"a7e882e3-bda9-4a76-8778-2cbf04e6a486":{"name":"todo-two","priority":null,"tags":["cine","tv"]},"c01f0d12-6212-46fa-a063-0c667857b420":{"name":"todo-three","priority":null,"tags":["food","tv"]},"8fbbd479-7bf2-4708-b37f-adc781815362":{"name":"todo-three","priority":null}}`;

localStorage.setItem("todolist", objstr);

initApp();

//randomTodos.forEach((todo) => singletonTodoList.addTodo(new Todo(todo)));
