// file : src/model/todo.js

export class Todo {
  // Champ statique privé qui appartient à la classe et pas à ses instances
  static #PRIORITY = ["high", "medium", "low", null];

  // Champs privés des instances
  #name;
  #content;
  #date;
  #priority;
  #tags = new Set();
  #id;
  #state;

  // Validateurs statiques privés

  /**
   *
   * @param {string} name
   */
  static #validateName(name) {
    if (typeof name !== "string") {
      throw new TypeError(
        `name doit être une chaine valide, reçu : ${name} (${typeof name})`,
      );
    }
    if (!/^[\p{L}][\p{L}\-\s]*[\p{L}]$|^[\p{L}]$/u.test(name)) {
      throw new RangeError(
        `name doit être une chaine valide comprenant des lettres (avec accent) ou des espaces, reçu : ${name}`,
      );
    }
  }

  /**
   *
   * @param {string|undefined} content
   */
  static #validateContent(content) {
    if (content !== undefined && typeof content !== "string") {
      throw new TypeError(
        `content doit être une chaîne, reçu : ${content} (${typeof content})`,
      );
    }
  }

  /**
   *
   * @param {Date|undefined} date
   */
  static #validateDate(date) {
    if (date !== undefined && !(date instanceof Date)) {
      throw new TypeError(
        `date doit être une date valide, reçu : ${date} (${typeof date})`,
      );
    }
  }

  /**
   *
   * @param {?string} priority
   */
  static #validatePriority(priority) {
    if (!Todo.#PRIORITY.includes(priority)) {
      throw new RangeError(
        `priority doit être dans la liste des valeurs "high", "medium", "low", null, reçu : ${priority}`,
      );
    }
  }

  /**
   *
   * @param {string} name
   * @param {string|undefined} content
   * @param {Date|undefined} date
   * @param {?string} priority
   * @param {Array.<string>|string|undefined} tags
   */
  constructor({ name, content, date, priority = null, tags } = {}) {
    Todo.#validateName(name);
    Todo.#validateContent(content);
    Todo.#validateDate(date);
    Todo.#validatePriority(priority);

    this.#name = name;
    this.#content = content;
    this.#date = date;
    this.#priority = priority;
    this.#tags = tags
      ? new Set(Array.isArray(tags) ? tags : [tags])
      : this.#tags;
    this.#id = crypto.randomUUID();
    this.#state = 0;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    Todo.#validateName(newName);
    this.#name = newName;
  }

  get content() {
    return this.#content;
  }
  set content(newContent) {
    Todo.#validateContent(newContent);
    this.#content = newContent;
  }

  get date() {
    return this.#date;
  }
  set date(newDate) {
    Todo.#validateDate(newDate);
    this.#date = newDate;
  }

  get priority() {
    return this.#priority;
  }
  set priority(newPriority) {
    Todo.#validatePriority(newPriority);
    this.#priority = newPriority;
  }

  get tags() {
    return this.#tags;
  }

  get id() {
    return this.#id;
  }

  get state() {
    return this.#state;
  }

  toggleState() {
    this.#state = !this.#state ? 1 : 0;
  }

  addTag(tag) {
    this.#tags.add(tag);
  }

  removeTag(tag) {
    this.#tags.delete(tag);
  }
}
