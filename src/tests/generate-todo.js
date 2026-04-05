// file : src/tests/generate-todo.js

import { Todo } from "../model/todo.js";

function generateTodos(count = 1) {
  const tagsPool = ["cine", "tv", "work", "food"];
  const priorities = ["low", "medium", "high", null];

  function randomName() {
    const words = [
      "Alpha",
      "Bravo",
      "Gamma",
      "Delta",
      "Echo",
      "Foxtrot",
      "Hotel",
      "India",
      "Juliet",
      "Kilo",
    ];
    const base = words[Math.floor(Math.random() * words.length)];
    const suffix =
      Math.random() > 0.5 ? ` ${Math.floor(Math.random() * 100)}` : "";
    const hyphen =
      Math.random() > 0.7 ? `-${Math.floor(Math.random() * 10)}` : "";
    return base + hyphen + suffix;
  }

  function randomTags() {
    if (Math.random() < 0.4) return null;

    const shuffled = [...tagsPool].sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * 5); // 0 à 4
    return shuffled.slice(0, count);
  }

  function randomDate() {
    if (Math.random() < 0.6) return null;
    const start = new Date(2025, 0, 1).getTime();
    const end = new Date(2027, 11, 31).getTime();
    return new Date(start + Math.random() * (end - start));
  }

  return Array.from({ length: count }, () => ({
    name: randomName(),
    content:
      Math.random() < 0.3
        ? null
        : "Contenu " + Math.floor(Math.random() * 1000),
    done: Math.random() < 0.5,
    priority: priorities[Math.floor(Math.random() * priorities.length)],
    tags: randomTags(),
    date: randomDate(),
  }));
}

console.log(generateTodos(10));
