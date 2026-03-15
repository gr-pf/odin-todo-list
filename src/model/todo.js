// file : src/model/todo.js

const PRIORITY = ["high", "medium", "low", null];

export class Todo {
  /**
   *
   * @param {string} name
   * @param {string|undefined} content
   * @param {Date|undefined} date
   * @param {?string} priority
   * @param {Array.<string>|string|undefined} tags
   */
  constructor(name, content, date, priority = null, tags) {
    if (typeof name !== "string") {
      throw new TypeError(
        `name doit être une chaine valide, reçu : ${name} (${typeof name})`,
      );
    }
    if (!/^[\p{L}\s\-]+$/u.test(name)) {
      throw new SyntaxError(
        `name doit être une chaine valide de format [a-zA-Z], reçu : ${name}`,
      );
    }
    if (content !== undefined && typeof content !== "string") {
      throw new TypeError(
        `content doit être une chaîne, reçu : ${content} (${typeof content})`,
      );
    }
    if (date !== undefined && !(date instanceof Date)) {
      throw new TypeError(
        `date doit être une date valide, reçu : ${date} (${typeof date})`,
      );
    }
    if (!PRIORITY.includes(priority)) {
      throw new TypeError(
        `priority doit être dans la liste des valeurs "high", "medium", "low", null, reçu : ${priority}`,
      );
    }
    this.name = name;
    this.content = content;
    this.date = date;
    this.priority = priority;
    this.tags = tags;
    this.id = crypto.randomUUID();
    this.state = 0;
  }

  toggleState() {
    this.state = !this.state ? 1 : 0;
  }
}
