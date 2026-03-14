export class Todo {
  /**
   *
   * @param {string} name
   * @param {string} content
   * @param {Date} date
   * @param {string} priority
   * @param {Array<string>} tags
   */
  constructor(name, content, date, priority, tags) {
    this.name = name;
    this.content = content;
    this.date = date;
    this.priority = priority;
    this.tags = tags;
    this.id = crypto.randomUUID();
  }
}
