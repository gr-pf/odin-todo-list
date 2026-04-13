// file : src/index.js

import { TodoList, singletonTodoList } from "./model/todo-list.js";
import { Todo } from "./model/todo.js";
import { randomTodos } from "./tests/generate-todo.js";
import { initApp } from "./init.js";
import "./style.css";

initApp();
